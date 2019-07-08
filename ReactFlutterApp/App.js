
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { Image, Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, Alert ,Linking   } from 'react-native';
import BestBuyservice from './services/bestbuyservice';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProductDetails from './services/ProductDetails';
import Icon from '@expo/vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import ProductLocations from './services/ProductLocations';
import Cart from './services/Cart';
import Voice from './services/Voice'



// the cards need a call to action
class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    // this.products = [];
    this.state = { products: [] };
  }

  componentDidMount() {
    this.getProducts();

  }

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };


  getProducts() { //expot because i want the other page to have acees to these variables 
    const bestBuyService = new BestBuyservice();
    bestBuyService.getProducts().then((response) => {

      const products = response.data.products;
      const mappedProducts = products.map(product => {
        return {
          name: product.name,
          image: product.image,
          avail: product.inStoreAvailability,
          price: product.regularPrice,
          description: product.shortDescription,
          manufacturer: product.manufacturer,
          id: product.sku

        }
      })
      console.log("bestBuyService")
      this.setState({
        products: mappedProducts
      })

    })

  }

  

  render() {
 

    const { navigate } = this.props.navigation;
    const { search } = this.state;

    return (


      
      <ScrollView>

        <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
            round
          />
         

          <View style={styles.container}>


            {this.state.products.map(product => {
              return (



                <View key={product.id} style={styles.listView}>
                  <TouchableOpacity
                    onPress={() => navigate('ProductDetails', {
                      name: product.name,
                      image: product.image,
                      avail: product.inStoreAvailability,
                      price: product.regularPrice,
                      description: product.shortDescription,
                      manufacturer: product.manufacturer,
                      id: product.sku

                      // otherParam:product,
                    })}
                  >
                      {/* <TouchableOpacity
                      onPress={() => navigate('ProductDetails', {
                        name: product.name,
                        image: product.image,
                        avail: product.inStoreAvailability,
                        price: product.regularPrice,
                        description: product.shortDescription,
                        manufacturer: product.manufacturer,
                        id: product.sku
  
                        // otherParam:product,
                      })}> */}

                      <View style={styles.padding} >
                      <Image style={styles.image} source={{ uri: product.image }} />
                    </View>

                      </TouchableOpacity>
                    

                    <View style={styles.border}>

                      <TouchableOpacity
                      onPress={() => navigate('ProductDetails', {
                        name: product.name,
                        image: product.image,
                        avail: product.inStoreAvailability,
                        price: product.regularPrice,
                        description: product.shortDescription,
                        manufacturer: product.manufacturer,
                        id: product.sku
  
                        // otherParam:product,
                      })}>

                            
                          <View style={styles.text}>

                           <Text style={styles.descriptions}>
                               {product.name.substring(0, 50) + "..."}
                            </Text>

                             <Text style={styles.price}>
                                 {"$ " + product.price}
                                  {product.shortDescription}
                               </Text>
                               
                      

                               <Button
                                  onPress={() => navigate('ProductDetails', {
                                    name: product.name,
                                    image: product.image,
                                    avail: product.inStoreAvailability,
                                    price: product.regularPrice,
                                    description: product.shortDescription,
                                    manufacturer: product.manufacturer,
                                    id: product.sku
              
                                    // otherParam:product,
                                  })}
                                  title="Veiw"
                                  color="#fcdc00"
                                  />

                              </View>


                      </TouchableOpacity>

                    </View>

                    <TouchableOpacity onPress={() => navigate('ProductDetails', {
                      name: product.name,
                      image: product.image,
                      avail: product.inStoreAvailability,
                      price: product.regularPrice,
                      description: product.shortDescription,
                      manufacturer: product.manufacturer,
                      id: product.sku

                      // otherParam:product,
                    })}>
                        <Image styles={styles.imageLeft} source={require('./assets/images/chevron-right.png')} />
                    </TouchableOpacity>
                    


                  {/* </TouchableOpacity> */}
                </View>
              )
            }

            )}

          </View>
        </View>



      </ScrollView>
    )
  }


}



const AppStack = createStackNavigator({

  Home: {
    screen: AppContainer,

    navigationOptions: () => ({

      title: `DuckBuy`,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,

      },
      headerLeft: (
          <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.realdecoy.com/jamaica/') }>
            <Image
              style={styles.imageheader}
              source={require('./assets/images/YRDduck.png')}
            />
          </TouchableOpacity>

      ),
      headerRight: (
        <View style={{padding:12}}>
        <Icon
          name="user-circle"
          size={30}
          paddingRight={10}
          justifyContent="center"
          onPress={() => Alert.alert('update coming soon!')}
        />
        </View>
      ),

    }),
  },

  ProductLocations:{
    screen:ProductLocations,
  
    
    content: ProductLocations
},

  ProductDetails: {
    screen: ProductDetails
  },

  Cart: {
    screen: Cart
  },


  // Voice: {
  //   screen: Voice
  // }

});



export const Main = createBottomTabNavigator({

  

  Home: {
    screen: AppStack,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          color={tintColor}
          size={30}
        />
      )
    })

  },

  Voice: {
    screen:  AppStack,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="microphone" ///doesnt seem to allow the outlineof icons
          color={tintColor}
          size={25}
          paddingTop= {10}
        />
      )
    })
  },


  Cart: {
    screen: Cart,
    
    navigationOptions: () => ({
      
      tabBarIcon: ({ tintColor }) => (

        <View>

       <View style={{position:'absolute', height:20, width:20, borderRadius:10, backgroundColor:'#fcdc00',
                      right:15, bottom:15, alignItems:'center', justifyContent:'center',zIndex:2000}}>
          <View>
            <Text style={{fontSize:7, fontWeight:'bold'}}>0</Text>
          </View>

       </View>
     <Icon
          name="shopping-cart"
          color={tintColor}
          size={25}
        />
      </View>
      )
    })

  },


},
{
  initialRouteName: 'Home',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
    activeTintColor: '#405BDB',
    inactiveTintColor: '#9B9B9B',
    adaptive:'true',
  
  },
}
);


const MainAgain = createAppContainer(Main);

export default class App extends React.Component {
  render() {
    return <MainAgain />;
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 0,
    padding: 70,

  },

  listView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 10,
    padding: 20
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',

  },
  descriptions: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
  },

  price: {
    fontSize: 16,
    textAlign: 'left',
    color: 'green',
  },
  image: {
    alignItems: 'center',
    // justifyContent: "space-around",
    padding: 30,
    width: 120,
    height: 80,
    marginLeft: 150,
  },

  border: {
    borderLeftWidth: 3,
    borderLeftColor: '#d3d3d3'

  },


  imageheader: {
    width: 40,
    height: 40,
    marginLeft: 10


  },

  padding: {
    paddingRight: 15
  },


  text: {
    padding: 20,
    // marginLeft: 5,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }


});


