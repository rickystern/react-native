
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, Alert, Linking } from 'react-native';
import BestBuyservice from './services/bestbuyservice';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProductDetails from './services/ProductDetails';
import Icon from '@expo/vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import ProductLocations from './services/ProductLocations';
import Cart from './services/Cart';
import Voice from './services/Voice';
import { Avatar } from "react-native-elements";
class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { products: [] };
  }

  componentDidMount() {
    this.getProducts();

  }

  state = {
    search: '',
    firstQuery: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };


  getProducts(firstQuery) {
    const bestBuyService = new BestBuyservice();
    bestBuyService.getProducts(firstQuery).then(async (response) => {

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
      });
      await this.setState({
        products: mappedProducts
      })

    })

  }






  render() {


    const { navigate } = this.props.navigation;
    const { search } = this.state;
    const { firstQuery } = this.state;

    return (



      <ScrollView>

        <View>

          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
            inputStyle={{backgroundColor: 'white'} }
            containerStyle={{ backgroundColor: 'white'}}
            round
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
            onSubmitEditing={() => this.getProducts(firstQuery)}
            onCancelButtonPress={console.log(firstQuery)}
            showLoading={true}
            underlineColorAndroid="black"
            rightIconContainerStyle={{ backgroundColor: 'white' }}
            leftIconContainerStyle={{ backgroundColor: 'white' }}
            animate="true"
            animationDuration={200}


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
                    })}
                  >
                    <View style={styles.padding} >
                      <Image style={styles.image} source={{ uri: product.image }} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigate('ProductDetails', {
                      name: product.name,
                      image: product.image,
                      avail: product.inStoreAvailability,
                      price: product.price,
                      description: product.shortDescription,
                      manufacturer: product.manufacturer,
                      id: product.sku
                    })}>

                    <View style={styles.border}>




                      <View style={styles.text}>

                        <Text style={styles.descriptions}>
                          {product.name.substring(0, 60) + "..."}
                        </Text>

                        <Text style={styles.price}>
                          {"$ " + product.price} {'      '}{'       ' + product.avail !== 'false' ? <Text>In Stock</Text> : <Text style={{ color: 'red' }}> OutOfStock</Text>}
                          {product.shortDescription}
                        </Text>

                        <Button
                          title="Veiw Product"
                          color="#fcdc00"
                        />

                      </View>




                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigate('ProductDetails', {
                    name: product.name,
                    image: product.image,
                    avail: product.inStoreAvailability,
                    price: product.regularPrice,
                    description: product.shortDescription,
                    manufacturer: product.manufacturer,
                    id: product.sku


                  })}>
                    <Image styles={styles.imageLeft} source={require('./assets/images/chevron-right.png')} />
                  </TouchableOpacity>

                </View>



              );

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
        <TouchableOpacity onPress={() => Linking.openURL('https://www.realdecoy.com/jamaica/')}>
          <Image
            style={styles.imageheader}
            source={require('./assets/images/YRDduck.png')}
          />
        </TouchableOpacity>

      ),
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


    }),
  },

  ProductLocations: {
    screen: ProductLocations,
    navigationOptions: () => ({
      title: 'Store Locator',
      tabBarVisible: false,
    })


  },

  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: () => ({
      title: 'is'
    })

  },

  Cart: {
    screen: Cart,
    navigationOptions: () => ({
      title: 'DuckBuy',
      headerRight: (
        <View style={{ padding: 12 }}>
          <Avatar
            rounded
            icon={{ name: 'user-circle', color: 'black', type: 'font-awesome' }}
            onPress={() => Alert.alert('update coming soon!')}
            activeOpacity={0.7}
          />
        </View>
      )
    })
  },

  Voice: {
    screen: Voice,
    navigationOptions: () => ({

      title: `DuckBuy`,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,

      },
      headerRight: (
        <View style={{ padding: 12 }}>
          <Avatar
            rounded
            icon={{ name: 'user-circle', color: 'black', type: 'font-awesome' }}
            onPress={() => Alert.alert('update coming soon!')}
            activeOpacity={0.7}
          />
        </View>
      )
    })

  },
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
    screen: Voice,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="microphone"
          color={tintColor}
          size={25}
          paddingTop={10}
        />
      )
    })
  },


  Cart: {
    screen: Cart,

    navigationOptions: () => ({

      tabBarIcon: ({ tintColor }) => (

        <View style={{ color: tintColor }}>

          <View style={{
            position: 'absolute', height: 20, width: 20, borderRadius: 10, backgroundColor: '#fcdc00',
            right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000
          }}>
            <View>
              <Text style={{ fontSize: 7, fontWeight: 'bold' }}>0</Text>
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
      adaptive: 'true',

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
    padding: 30,
    width: 120,
    height: 80,
    marginLeft: 150,
    resizeMode: 'contain',

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
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

