import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, Alert, Linking } from 'react-native';


export default class Cart extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{color:'black', fontSize:20, marginBottom:30}}>Page under construction</Text>
        <TouchableOpacity onPress={() => Alert.alert('update coming soon!')}>
          <View>
            <Image source={{uri: 'https://image.flaticon.com/icons/png/512/576/576997.png'}}
            style={{width: 400, height: 400, resizeMode: 'contain',}} />
          </View>


        </TouchableOpacity>
        
      </View>
    );
  }
}

