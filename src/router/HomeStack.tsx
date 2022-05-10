import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {Text, SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.searchBar}>
        <Feather name="search" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductScreen" />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#22e3dd',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
  },
  input: {
    height: 40,
    marginLeft: 10,
  },
});
