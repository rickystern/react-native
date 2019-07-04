import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location} from 'expo';
import * as Permissions from 'expo-permissions'
import {DestinationButton} from './DestinationButton';
//import {CurrentLocationButton} from './CurrentLocationbutton'




export default
class App extends React.Component {

    constructor(props){
        super(props);
        
        this.state={
            region:null
    }
    this._getLocationAsync();
}

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if(status !== 'granted')
            console.log('Permission to location was denied ');
        let location = await location.getCurrentPositionAsync({enabledHighAccuracy: true});
        let region = {

            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
            latitudeDelta: 0.045,
            longitudeDelta:0.045,
        }
        this.setState({ region: region})
    }

  render() {
     
    return (
        <View style = {styles.container}>

             <DestinationButton />
             {/* <CurrentLocationButton/> */}
                <MapView
                    initialRegion={this.state.region}
                    style={{ flex: 1 }}
                    // provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass={true}
                    followsUserLocation={true}
                    loadingEnabled={true}
                    toolbarEnabled={true}
                    zoomEnabled={true}
                    rotateEnabled={true}
                                
                    
                />
       

        </View>
             

      
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})