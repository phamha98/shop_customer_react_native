import React, {useState, useEffect, useContext} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import {Header, Search} from '../../component';

;

export default function index({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        onClickLeft={() => navigation.openDrawer()}
        background={null}
        navigation={navigation}
        colorIcon="#030303A8"
        leftNameIcon="menu-outline"
        title="Thông báo"
      />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
import { createStore } from 'redux'
const add={
  type:'ADD',
  value:11
}
const sub={
  type:'SUB',
  value:1
}
function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return action.value
    case 'SUB':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))


store.dispatch(add) // in ra 1
//store.dispatch(sub) // in ra 2
//store.dispatch({type:'ADD',value:100}) // in ra 1