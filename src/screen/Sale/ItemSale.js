import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import styles from './styles'
const ItemProduct = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {transData: item})}
      style={styles.viewItem}>
      <Image
        source={{uri: item.img}}
        style={styles.imageItem}
      />
      <View
        style={styles.saleItem}>
        <Text style={{fontSize: 15, color: 'yellow'}}>Sale</Text>
        <Text style={{fontSize: 14, color: 'yellow', fontWeight: 'bold'}}>
          {parseFloat(item.sale).toFixed(1)}%
        </Text>
      </View>
      <View style={{width: '100%',paddingLeft:20}}>
        <Text>{item.name}</Text>
        <Text
          style={styles.saleText}>
          ${item.price}
        </Text>
        <Text style={{fontWeight: 'bold', color: '#0178A7', fontSize: 18}}>
          ${parseFloat(item.price-(item.price*item.sale*0.01)).toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ItemProduct;
