import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../../component/Header';
////$RECYCLE.BIN

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
///import screen 4
import Goods from '../Goods';
import User from '../User';
import Staff from '../Staff';
import Order from '../Order';
export default function index({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Goods" component={Goods} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
}
///$RECYCLE.BIN
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title="Admin"
        rightIcon={true}
        rightNameIcon="person-circle-outline"
        colorIcon="blue"
      />
      <View style={styles.content}>
        <FlatList
          data={listContent}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          numColumns={2}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 10,
  },
});
const listContent = [
  {
    id: 1,
    name: 'Quản lý nhân viên',
    icon: 'person-add-outline',
    background: 'red',
    colorText: 'blue',
    navigation: 'Staff',
  },
  {
    id: 2,
    name: 'Quản lý người dùng',
    icon: 'people-outline',
    background: 'blue',
    colorText: 'red',
    navigation: 'User',
  },
  {
    id: 3,
    name: 'Quản lý đơn hàng',
    icon: 'bar-chart-outline',
    background: 'gray',
    colorText: '#fff',
    navigation: 'Order',
  },
  {
    id: 4,
    name: 'Quản lý mặt hàng',
    icon: 'apps-outline',
    background: 'green',
    colorText: 'red',
    navigation: 'Goods',
  },
];
const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        width: 170,
        height: 180,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: item.background,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate(item.navigation)}>
      <Ionicons name={item.icon} color={item.colorText} size={40} />
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
