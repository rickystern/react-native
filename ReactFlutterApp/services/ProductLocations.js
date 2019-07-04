import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from 'expo';
import * as Permissions from 'expo-permissions'
import { DestinationButton } from './DestinationButton';
import { CurrentLocationButton } from './CurrentLocationbutton'




export default
    class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            region: null,
            mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
            locationResult: null,
            location: {coords: { latitude: 37.78825, longitude: -122.4324}},

        }
        this._getLocationAsync();

    }

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
        console.log("_getLocationAsync was called", location)
        this.setState({ region: location })


    }


    render() {
        if (this.state.region === null) return <View></View>
        return (
            <View style={styles.container}>

                <DestinationButton />
                <CurrentLocationButton />
                <MapView
                    initialRegion={{ latitude: this.state.region.coords.latitude, longitude: this.state.region.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
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
                    region={{ latitude: this.state.region.coords.latitude, longitude: this.state.region.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}




                >
                    <MapView.Marker
                        coordinate={this.state.region.coords}
                        title={"my location"}
                        description={"description"}
                    />

                    <MapView.Marker
                        coordinate={{
                            latitude: 18.0066873,
                            longitude: -76.7913445
                        }}
                        title={"title"}
                        description={"description"}
                    />


                </MapView>




            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})