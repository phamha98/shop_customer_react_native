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
const ItemNewProduct = ({item, onClick, navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductOne', {transData: item})}
      style={{
        width: width / 2 - 10,
        height: 300,
        // backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 5,
        borderRadius: 5,
        overflow: 'hidden',
      }}>
      <Image
        source={{uri: item.img}}
        style={{
          width: '100%',
          minHeight: 250,
          resizeMode: 'stretch',
          borderRadius: 5,
          overflow: 'hidden',
        }}
      />
      <View
        style={{
          width:30,
          height: 40,
          backgroundColor: 'red',
          position: 'absolute',
          right: 5,
          top: 2,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: 'yellow'}}>New</Text>
         
      </View>
      <View style={{width: '100%',paddingLeft:20}}>
        <Text>{item.name}</Text>
        <Text style={{fontWeight: 'bold', color: '#0178A7', fontSize: 18}}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ItemNewProduct;
/////
