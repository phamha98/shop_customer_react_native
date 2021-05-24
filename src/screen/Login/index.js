import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import localhost from '../../api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../component/AppContext';
export default function Login({navigation}) {
  const [user, setUser] = useState("m");
  const [password, setPassword] = useState("m");
  const [progess, setProgess] = useState(false);
  const {token, setToken,setIdUser} = useContext(AppContext);
  const btnLogin = () => {
    setProgess(true);
    fetch(localhost+'api/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.code);
        setProgess(false);
        if (data.code === 200) {
          save(data.data.token);
          setToken(data.data.token);
          setIdUser(data.data.id_user);
          console.log('Login thanh cong');
          return navigation.navigate('Drawer');
        } else {
          Alert.alert('Email or password falsed', 'Error:' + data.message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel '),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('')},
          ]);
        }
      })
      .catch(e => console.log(e));
  };

  const save = async token => {
    try {
      await AsyncStorage.setItem('@AAA:key', token);
      console.log('ok set token sucess');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#0B193F"></StatusBar>
        <Image
          style={styles.img}
          source={require('../../img/aodep.png')}></Image>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="gray"
          placeholder="Email"
          onChangeText={text => setUser(text)}
          value={user}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="gray"
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}></TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate('Forgot')}
          style={styles.textForgot}>
          <Text style={{fontSize: 16, color: 'gray'}}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={btnLogin} style={styles.buttonLogin}>
          {!progess && <Text style={{fontSize: 25, color: '#fff'}}>Login</Text>}

          {progess && <ActivityIndicator size="large" color="#0000ff" />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AdminHome')}
          style={[styles.signup]}>
          <Text style={{color: 'gray', fontSize: 18}}>
            Truy cập vào hệ thống
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={[styles.signup]}>
          <Text style={{color: 'gray', fontSize: 18}}>
            Don't have an acount? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#0B193F',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 5,
    marginTop: 30,
  },
  textInput: {
    height: 50,
    width: 300,
    color: 'gray',
    fontSize: 20,
    paddingLeft: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#05A3FF',
    marginVertical: 8,
  },
  buttonLogin: {
    height: 50,
    width: 300,
    marginVertical: 15,
    borderRadius: 25,
    backgroundColor: '#0E95D4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textForgot: {
    paddingLeft: 180,
  },
  signup: {
    marginVertical: 5,
  },
});
