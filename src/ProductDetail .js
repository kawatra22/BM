import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'gray',
  },
});

export default ProductDetail;