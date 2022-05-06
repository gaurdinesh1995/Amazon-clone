import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import CartProductItems from '../../components/CartProductItems';
import Button from '../../components/Button';
import products from '../../data/cart';
const ShoppingCart = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length} items):{' '}
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            ${totalPrice.toFixed(2)}
          </Text>
        </Text>
        <Button
          text="Proceed to checkout"
          onPress={() => console.warn('Go to checkout')}
          containerStyles={{backgroundColor: '#e3c905',borderColor:'#c7b702'}}
        />
      </View>

      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItems CartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
