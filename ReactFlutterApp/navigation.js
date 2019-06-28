import  React from 'react';

import App from '.App'

const MainNavigator = createStackNavigator({
    Home: {screen: App}
    //Profile: {screen: ProductDetails},
  });
  
  const navigation = createAppContainer(MainNavigator);
  export default navigation;