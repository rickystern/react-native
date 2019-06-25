import BestBuyservice from './services/bestbuyservice';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import App from App;








export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>

         
          <Card title= {product.name}>
          {/*react-native-elements Card*/}
          <View key={i} style={styles.image} >
          <Image  
            style={styles.image}
            resizeMode="cover"
            source={source={{ uri: product.image }}
          >
             </View>
            <Text style={styles.paragraph}>
            {product.description}  {/*     bring back description css */}
            </Text>
            <text>
                $ + {product.price}
            </text>
            <text>{product.avail}</text>
          </Card>
        </View>
      );
    }
  }