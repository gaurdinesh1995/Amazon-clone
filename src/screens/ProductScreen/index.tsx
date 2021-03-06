import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import styles from './ styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousal from '../../components/ImageCarousal';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  const route = useRoute();
  
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image carouser */}
      <ImageCarousal images={product.images} />
      {/* Option selector */}

      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Buttons */}
      <Button
        text="Add To Cart"
        onPress={() => {
          console.warn('Add to cart');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text="Buy Now"
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
