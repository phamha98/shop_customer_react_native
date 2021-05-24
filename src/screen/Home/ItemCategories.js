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
const ItemCategories = ({item, onClick}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity
     
      style={{
        flexDirection: 'column',
        width: width / 3 - 4,
        height: 130,
        margin: 2,
       // backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent:'center',
        
      }}
      key={item.id}>
      <View
        style={{
          width: 100,
          height: 100, 
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.img}}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
       
      </View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};
export default ItemCategories;
/////
