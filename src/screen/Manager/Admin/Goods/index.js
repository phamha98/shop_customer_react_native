import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Insert from './Insert';
import Delete from './Delete';
import Update from './Update';
import List from './List';
export default function index({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Insert" component={Insert} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="Delete" component={Delete} />
    </Stack.Navigator>
  );
}
import Header from '../../../../component/Header';

function Home({navigation}) {
  return (
    <View style={styles.container}>
       <Header title="Quản lý mặt hàng" background="pink"  navigation={navigation}/>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('List')}>
        <Text style={{fontSize: 20}}>Danh sách các mặt hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}
       onPress={() => navigation.navigate('Insert')}>
        <Text style={{fontSize: 20}}>Thêm  mặt hàng mới</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.item}
      onPress={() => navigation.navigate('Update')}>
        <Text style={{fontSize: 20}}>Cập nhật  mặt hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}
      onPress={() => navigation.navigate('Delete')}>
        <Text style={{fontSize: 20}}>Xóa  mặt hàng</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 5,
    minHeight: 50,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  item: {
    marginHorizontal: 16,
    minHeight: 50,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
