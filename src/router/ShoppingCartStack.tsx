import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCart from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShopingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCart}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default ShopingCartStack


