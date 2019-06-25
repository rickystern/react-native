import React, {component} from 'react';
import {StyleSheet, TouchableOpacity, Image ,Text,Veiw} from 'react-native'

export default class Card extends  component{
    render(){
        return(
            <veiw Style = { styles.container}>
                <TouchableOpacity style= {styles.card}>
                  <image>
                      <Text>card Title</Text>
                      </image>  
                </TouchableOpacity>
            </veiw>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})