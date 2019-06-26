
import React from 'react';
//import {Card} from 'react-native-paper'; //added
import { Image, Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import BestBuyservice from './services/bestbuyservice';

//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";







class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    // this.products = [];
    this.state = { products: [] };
  }

  componentDidMount() {
    this.getProducts();

  }

  getProducts() {
    const bestBuyService = new BestBuyservice();
    bestBuyService.getProducts().then((response) => {

      const products = response.data.products;
      const mappedProducts = products.map(product => {
        return {
          name: product.name,
          image: product.image,
          avail: product.inStoreAvailability,
          price: product.salePrice,
          description: product.description,
          thumbnail: product.thumbnailImage
        }
      })
      console.log("bestBuyService")
      this.setState({
        products: mappedProducts
      })

    })

  }
  render() {
    return (

      <ScrollView>
        <View style={styles.container}>

          {this.state.products.map(product => {
            return (
              <View style={styles.listView}>


                <View style= {styles.padding} >
                    <Image style={styles.image} source={{ uri: product.image }} />
                </View>

                <View style= {styles.border}>


                  <View style={styles.text}>

                    <Text style={styles.descriptions}>
                      {product.name}
                    </Text>

                    <Text style={styles.descriptions}>
                      {product.description}
                    </Text>

                  </View>




                </View>
                <Image styles={styles.imageLeft} source={require('./assets/images/chevron-right.png')} />

              </View>
            )
          }

          )}

        </View>
      </ScrollView>
    )
  }


}

const AppStack = createStackNavigator({
  Home: {
    screen: AppContainer
  }
  //navbutton and title
});

const App = createBottomTabNavigator({
  Home: {
    screen: AppStack
  },
  voice: {
    screen: AppStack
  },
  cart: {
    screen: AppStack
  }
});

 export default App;
//export default createAppContainer(AppNavigator);



const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 70,

  },
  listView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 7,
    padding:10
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',

  },
  descriptions: {
    fontSize: 12,
    textAlign: 'left',
    color: '#34495e',


  },
  image: {
    alignItems: 'center',
   // justifyContent: "space-around",
    padding:30,
    width: 120,
    height: 80,
    marginLeft: 150,
  },

  border: {
    borderLeftWidth: 3,
    borderLeftColor: '#d3d3d3'
    
  },


  imageLeft: {
    //padding: 10,
   // marginRight: 200

    //   margin:5

  },

  padding:{
    paddingRight:15
  },


  text: {
    padding: 20,
    // marginLeft: 5,
    textAlign: 'center',
    fontSize:30,
    fontWeight: 'bold'
    

  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',

  }

});


