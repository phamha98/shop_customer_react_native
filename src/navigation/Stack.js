import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Forgot, Signup,EditPerson,ChangePass,ProductDetails} from '../screen';
//
import AdminHome from '../screen/Manager/Admin/Home'
import Bottomtab from './Bottomtab';
import Drawer from './Drawer';
const Stack1 = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <Stack1.Navigator
        initialRouteName="Login"//*
        screenOptions={{headerShown: false}}>
        <Stack1.Screen name="Login" component={Login} />
        <Stack1.Screen name="Forgot" component={Forgot} />
        <Stack1.Screen name="Signup" component={Signup} />
        <Stack1.Screen name="Drawer" component={Drawer} />
        <Stack1.Screen name="EditPerson" component={EditPerson} />
        <Stack1.Screen name="ProductDetails" component={ProductDetails} />
        <Stack1.Screen name="ChangePass" component={ChangePass} />
        <Stack1.Screen name="AdminHome" component={AdminHome} />
      </Stack1.Navigator>
    </NavigationContainer>
  );
}
