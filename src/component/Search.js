import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Search({background, colorIcon}) {
  return (
   
      <View style={[styles.container, {backgroundColor: background}]}>
        <Text></Text>
        <Ionicons name="search" size={30} color={colorIcon} />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="gray"
          placeholder="Search..."></TextInput>
      </View>
   
  );
}
Search.defaultProps = {
  colorIcon: '#000',
  background: '#fff',
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical:2
  },
  textInput: {
    height: '100%',
    marginHorizontal: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
});
