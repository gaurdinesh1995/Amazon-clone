import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{title: 'Home'}}
      />
      <Stack.Screen component={ProductScreen} name="ProductScreen" />
    </Stack.Navigator>
  );
};

export default HomeStack;
