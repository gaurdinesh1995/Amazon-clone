import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItems';
import products from '../../data/products';
const HomeScreen = ({searchValue}: {searchValue: string}) => {
  return (
    <View style={styles.container}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
