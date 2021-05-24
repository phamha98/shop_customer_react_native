import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const screenwidth = Dimensions.get('screen').width;
export default function TabBar({state, descriptors, navigation}) {
  const [select, setSelect] = useState('Home');
  const {routes} = state;
  const handlePress = active => {
    navigation.navigate(active);
    setSelect(active);
  };
  const renderColor = nameTab => (nameTab === select ? '#FD0901' : '#415E41');
  const renderSize = nameTab => (nameTab === select ? 28 : 18);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {routes.map(route => (
          <View key={route.key}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => handlePress(route.name)}>
              <Ionicons
                name={route.params.icon}
                size={renderSize(route.name)}
                // name={renderIcon(route.name, route)}
                color={renderColor(route.name)}
              />
              <Text style={{fontSize: 10, color: renderColor(route.name)}}>
                {route.params.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    width: screenwidth,
  },
  wrapper: {
    width: '100%',
    height: 50,
    backgroundColor: '#A1EE74',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  item: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: screenwidth / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
