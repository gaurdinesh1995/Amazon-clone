import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const ImageCarousal = ({images}: {images: [string]}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThrashold: 50,
          minimumViewTime: 300,
        }}
      />

      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousal;

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#e9e9e9',
    margin: 5,
  },
});
