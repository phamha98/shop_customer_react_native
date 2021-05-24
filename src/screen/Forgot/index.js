import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function index({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <View style={styles.content}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Forgot Password?</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Email:</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.textInput}></TextInput>
        <TouchableOpacity style={styles.send}>
          <Text style={{fontSize:25,color:'#fff'}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 40,
    marginVertical: 50,
    height: 300,
    backgroundColor: '#fff',
    padding: 2,
    borderWidth:1
  },
  textInput: {
    height: 50,
    marginHorizontal: 3,
    marginVertical: 5,
    borderBottomWidth: 0.2,
    fontSize:20
  },
  send:{
      width:250,
      height:50,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#04B8FF',
      position:'absolute',
      bottom:40,
      left:35

  }
});
