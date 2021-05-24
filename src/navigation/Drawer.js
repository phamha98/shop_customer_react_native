import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from './Bottomtab'
const Drawer1 = createDrawerNavigator();
import {Person} from '../screen'
export default function Drawer() {
  return (
       <Drawer1.Navigator initialRouteName="Bottomtab">
        <Drawer1.Screen name="Bottomtab" component={Bottomtab} />
        <Drawer1.Screen name="Person" component={Person} />
        <Drawer1.Screen name="Notifications11" component={View} />
      </Drawer1.Navigator>
   );
}