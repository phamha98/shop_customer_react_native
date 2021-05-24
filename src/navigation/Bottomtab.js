import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Person, News, Sale, Notification,Cart} from '../screen';
const Tab = createBottomTabNavigator();
import {TabBar} from '../component';
export default function Bottomtab() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{icon: 'home', name: 'Home'}}
      />

      <Tab.Screen
        name="News"
        component={News}
        initialParams={{icon: 'flash', name: 'News'}}
      />
      <Tab.Screen
        name="Sale"
        component={Sale}
        initialParams={{icon: 'flame', name: 'Sale'}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        initialParams={{icon: 'cart', name: 'Cart'}}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        initialParams={{icon: 'notifications', name: 'Notification'}}
      />
    </Tab.Navigator>
  );
}
