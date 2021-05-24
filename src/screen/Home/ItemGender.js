import React,{useState, useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppContext} from '../../component/AppContext';

import Ionicons from 'react-native-vector-icons/Ionicons';
const ItemGender = ({item,onClick}) => {
  const { setGender} = useContext(AppContext);
     
    return (
      <TouchableOpacity
        onPress={()=>{
          setGender(item.gender);
        
          }}
        style={{
          flexDirection: 'column',
          width: 100,
          height: 100,
          margin: 2,
          alignItems: 'center',
        }}
        key={item.id}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            overflow: 'hidden',
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name={item.icon} size={28} />
        </View>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  export default ItemGender;
  /////