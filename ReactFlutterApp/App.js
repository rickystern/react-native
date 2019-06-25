
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import BestBuyservice from './services/bestbuyservice';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'welcome',
  };
  //all above added
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
    return(

    <ScrollView>
      <View style={styles.container}>

        {this.state.products.map(product => {
          return (

            <View style={styles.listView}>
              <Image style={styles.image} source={{ uri: product.image }} />

              <View style={styles.text}>

                <Text style={styles.descriptions}>
                  {product.name}
                </Text>

                <Text style={styles.descriptions}>
                  {product.description}
                </Text>

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

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    margin: 0,
    padding: 5

  },
  listView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: '#ecf0f1',
    marginTop: 10,
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
    alignItems:'center',
    width: 30,
    height: 58,
  },


  imageLeft: {
    padding: 10,
    //   margin:5
  },


  text: {
    padding: 50,
    marginLeft: 5,
    textAlign: 'center'

  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',

  }

});


