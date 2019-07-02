
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
import { Button } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProductLocations from './ProductLocations'







class dellaptop extends React.Component {
    static navigationOptions = {
        headerTitle: 'Duck Buy',
        headerRight: (
            <Icon
          name="user-circle"
          onPress={() => alert('This is a button!')}
          size={30}
          padding={20}
          paddingRight={10}
          justifyContent="center"
        />
        ),

        
        
    
      };
      
  
      state = {
          toggle:false
      }
      onPress(){
          const newState= !this.state.toggle;
          this.setState({toggle:newState})
      }


    render() {
        const { navigate } = this.props.navigation;
        const {toggle}= this.state;
        const IconColor= toggle?"red":"black";
        const { navigation } = this.props;
        const id = navigation.getParam('id')
        const image = navigation.getParam('image')
        const name = navigation.getParam('name')
        const description = navigation.getParam('description')
        const price = navigation.getParam('price')
        const Manufacturer = navigation.getParam('manufacturer')
        return (
            <View>

                <View  >
                    <Image style={styles.imageDetails} source={{ uri: image }} />
                </View>
                <Text style={styles.textdetails}>
                    {name}
                </Text>
                <Text>{description}</Text>
                    

                <View style={styles.heart}>


                        <View>


                            <TouchableOpacity
                                onPress={() => this.onPress()}
                            >

                                    <Icon
                                        style={{color:IconColor}}
                                        size={40}
                                        name='heart'
                                       
                                    />
                                    
                            </TouchableOpacity>

                        </View>    

                    <View style={styles.button}>
                        <Button
                          onPress={() => navigate('ProductLocations', {})}
                            style={styles.button}
                            title="Buy Now"
                            color="#194d33"
                        />
                    </View>

                </View>





            </View>


        )
    }
}

export default dellaptop;


const styles = StyleSheet.create({
    imageDetails: {
        alignItems: 'center',
        padding: 20,
        width: 400,
        height: 400,
        resizeMode: 'contain'

    },
    textdetails: {
        padding: 15,
        // marginLeft: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

    heart: {
        paddingLeft: 100,
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',



    },
    button: {
        padding: 30,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    



})