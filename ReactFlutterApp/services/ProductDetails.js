
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
import { Button } from 'react-native';






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
                                <Button
                                style={styles.button}
                                    title="Buy Now"
                                    color="#194d33"
                                    
                                />


                                {/* {/* <Button
                                style={styles.button} 
                                title="buy Now"
                                color = "green"
                                icon={
                                    <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                    />
                                }
                                 
                                /> */}
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
        fontSize: 10,
        fontWeight: 'bold'
      },

      heart: {
         
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        

    
      },
      button:{
          padding:30,
          margin :30
      }


     
})