import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, Alert, Linking } from 'react-native';

export default class Voice extends React.Component {

  render() {

    return (

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>

<View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>


          <TouchableOpacity onPress={() => Alert.alert('update coming soon!')}>

            <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/1458/1458584.png' }}
              style={{ width: 350, height: 350, resizeMode: 'contain', marginTop:80 }}
            />
          </TouchableOpacity>

</View>
        <View style ={{padding:30, marginTop:12, alignItems:'center'}} >
          <Text style={{fontSize:20, textAlign:'center', color:'black'}}>Tap the mic and say "Show me the Macbooks"</Text>
        </View>
      </View>

    );
  }
}


