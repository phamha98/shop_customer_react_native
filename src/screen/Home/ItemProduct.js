import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  NestedScrollView,
  VirtualizedList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const ItemProduct = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {transData: item})}>
      <View style={styles.viewProduct}>
        <Image source={{uri: item.img}} style={styles.viewImage} />
        <View style={{width: '100%', paddingLeft: 20}}>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: 'bold', color: '#0178A7', fontSize: 18}}>
          ${parseFloat(item.price-(item.price*item.sale*0.01)).toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemProduct;
