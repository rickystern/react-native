
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar } from "react-native-elements";

class dellaptop extends React.Component {
    static navigationOptions = {
        headerTitle: 'Duck Buy',


        headerRight: (
            <View style={{ padding: 12 }}>
                <Avatar
                    rounded
                    icon={{ name: 'user-circle', color: 'black', type: 'font-awesome' }}
                    onPress={() => Alert.alert('update coming soon!')}
                    activeOpacity={0.7}
                />
            </View>

        ),

    };


    state = {
        toggle: false
    }
    onPress() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }


    render() {
        const { navigate } = this.props.navigation;
        const { toggle } = this.state;
        const IconColor = toggle ? "red" : "black";
        const { navigation } = this.props;
        const id = navigation.getParam('id')
        const image = navigation.getParam('image')
        const name = navigation.getParam('name')
        const description = navigation.getParam('description')
        const price = navigation.getParam('price')
        const Manufacturer = navigation.getParam('manufacturer')

        console.log("this shoulsd be price" + price);
        return (

            <ScrollView>
                <View
                    style={styles.container}
                >
                    <View  >
                        <Image style={styles.imageDetails} source={{ uri: image }} />
                    </View>

                    <Text style={styles.textdetails}>

                        <Text>Featuring the :  </Text>
                        <Text style={{ color: 'black' }}>{name}</Text>
                        <Text>  get yours today for   </Text>
                        <Text style={{ color: "green", fontSize: 22 }}>{'$' + price}</Text>

                    </Text>

                    <View style={styles.heart}>


                        <View>


                            <TouchableOpacity
                                onPress={() => this.onPress()}
                            >

                                <Icon
                                    style={{ color: IconColor }}
                                    size={40}
                                    name='heart'

                                />

                            </TouchableOpacity>

                        </View >

                        <TouchableOpacity>
                            <View style={{ padding: 20, paddingLeft: 90 }}>
                                <Icon
                                    onPress={() => navigate('ProductLocations', {})}
                                    style={{ color: 'black' }}
                                    size={40}
                                    name='map-marker'

                                />
                            </View>
                        </TouchableOpacity>


                        <View style={styles.button}>
                            <Button
                                onPress={() => Alert.alert('update coming soon!')}
                                style={styles.button}
                                title="Buy Now"

                            />
                        </View>

                    </View>





                </View>
            </ScrollView>



        )
    }
}

export default dellaptop;


const styles = StyleSheet.create({
    imageDetails: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        marginTop: 0,
        width: 400,
        height: 400,
        resizeMode: 'contain'

    },
    textdetails: {
        padding: 10,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    },

    heart: {
        paddingLeft: 90,
        paddingRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30



    },
    button: {
        padding: 30,
        paddingLeft: 10,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fccb00'
    },

    container: {
        //padding: 20,
        paddingTop: 0,
        alignItems: 'center',
        height: hp('125%'),
        width: wp('100%')
    }



})