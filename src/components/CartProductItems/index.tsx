import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import products from '../../data/products';
interface CartProductItemProps {
  CartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({CartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = CartItem;
  const [quantity, setQuantity] = React.useState(quantityProp);
  

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}

            <Text>{item.avgRating}</Text>
          </View>

          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
      <QuantitySelector quantity={quantity} setQuanity={setQuantity} />
      </View>
      
    </View>
  );
};

export default CartProductItem;

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row:{
    flexDirection:'row'
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'cover',
  },
  rightContainer: {
    padding: 10,
    width: '100%',
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer:{
  margin:5
  }
});
