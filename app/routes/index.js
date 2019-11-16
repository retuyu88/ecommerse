import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer
  } from 'react-navigation';
import Products from '../screens/products';
import Checkout from '../screens/Checkout';
import Receipt from '../screens/Receipt';
import themes from '../styles/theme.style';
const Route = createStackNavigator(
{
  Products: { screen: Products},
  Checkout: { screen: Checkout},
  Receipt: { screen: Receipt}
},
{
 navigationOptions: {
    headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
 }
}
);

const Routes = createAppContainer(Route);
export default Routes;