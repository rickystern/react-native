import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default
class App extends React.Component {



  render() {
    return (
      <MapView
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
                    
         initialRegion={{
         latitude: 18.109581,
         longitude: -77.297508,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
        
        }}
      />
    );
  }
}