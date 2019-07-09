import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from 'expo';
import * as Permissions from 'expo-permissions';
import { DestinationButton } from './DestinationButton';
import { CurrentLocationButton } from './CurrentLocationbutton';
import getLocations from './getLocations';
import Polyline  from '@mapbox/polyline';
import {Button, icon} from 'native-base';
import getDirections from 'react-native-google-maps-directions'
import Icon from 'react-native-ionicons';




export default
    class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            region: null,
            mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
            locationResult: null,
            location: {coords: { latitude: 37.78825, longitude: -122.4324}},
            markers: [],
            
        }
        this._getLocationAsync();
      
    }

    componentDidMount() {
        this.getLocations();
        
      }

    getLocations(){
        console.log('i go called')


        const storelocations = new getLocations();
        storelocations.getLocations().then((response) =>{

            const storedMarkers =response.data.stores;
            const mappedMarkers = storedMarkers.filter((store) =>  {
                 return store.lng !==  null  && store.lat !== null;
            })
            .map(store => {

                return{
                    name: store.name,
                    latitude: store.lat,
                    longitude: store.lng,
                    storeID: store.storeId,
                    number: store.phone,
                    address: store.address
                }
                
            },
            )
           // console.log('getting stores')

            this.setState({
                
                markers:mappedMarkers
            })
            //console.log(mappedMarkers)



        })
        
    }
   

    // _filter(Markers){
      
    // const mappedMarker = Markers.filter(function(marker){
    //     return   marker.latitude !== isNull;
         
    //   })
      
    //    console.log( "this is new"+ mappedMarker)

    // }

    

    ///added simalr function to get data from location axiusthats all that was changed

    _getLocationAsync = async () => {

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log('Permission to location was denied ');
            return
        }

        let location = await Location.getCurrentPositionAsync({ enabledHighAccuracy: true });
        // let region = {

        //     latitude: location.coords.latitude,
        //     longitude: location.coords.longitude,
        //     latitudeDelta: 0.041,
        //     longitudeDelta: 0.021,
        // }
       // console.log("_getLocationAsync was called", location)
        this.setState({ region: location })


    }


    render() {


        
        if (this.state.region === null) return <View></View>
        return (
            <View style={styles.container}>

                <DestinationButton />
                  {/* <CurrentLocationButton /> */}

                <MapView
                    initialRegion={{ latitude: this.state.region.coords.latitude, longitude: this.state.region.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass={true}
                    followsUserLocation={true}
                    loadingEnabled={true}
                    toolbarEnabled={true}
                    zoomEnabled={true}
                    toolbarEnabled={true}
                    rotateEnabled={true}
                    region={{ latitude: this.state.region.coords.latitude, longitude: this.state.region.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                >
                  

                    <MapView.Marker
                        
                        coordinate={this.state.region.coords}
                        pinColor= {'#474744'}
                        title={"ME"}
                        description={"this markers shows where you are currently"}
                    />
                   
                    

                    {this.state.markers.map((marker) => {
                        return(

                            <MapView.Marker
                                title={"Best-Buy "+ marker.name}
                                description={marker.address}
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude,
                                   
                                }}
                               
                                />
                        )

                                
                    }

                  
                    
                    )}

                            </MapView>



            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})