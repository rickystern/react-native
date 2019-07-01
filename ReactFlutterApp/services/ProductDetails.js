
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
import { Button } from 'react-native-elements';






class dellaptop extends React.Component{

 
render (){
     const {navigation}= this.props;
    const id = navigation.getParam('id')
    const image = navigation.getParam('image')
    const name = navigation.getParam('name')
    const description = navigation.getParam('description')
    const price = navigation.getParam('price')
    const Manufacturer = navigation.getParam('manufacturer')
    return(
        <View>

                <View  >
                    <Image style={styles.imageDetails} source={{ uri: image }} />
                </View>
                <Text style = {styles.textdetails}>
                    {name}
                </Text>
                <Text>{description}</Text>


              

                    <View  style = {styles.heart}>
                                <Icon
                                
                                   size={40}
                                    name= 'heart'
                                    color='red'
                                />
                                <View style={styles.button}> 
                                    <Button
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
        height:400,
        resizeMode:'contain'
       
      },
      textdetails: {
        padding: 15,
        // marginLeft: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
      },

      heart: {
        paddingLeft:100,
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        

    
      },
      button:{
          padding:30,
          margin :50,
          alignItems: 'center',
          justifyContent: 'center',

      }


     
})