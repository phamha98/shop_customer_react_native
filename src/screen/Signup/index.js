import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import localhost from '../../api'

export default function index({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [progess, setProgess] = useState(false);
  const singup = () => {
    setProgess(true);
    if (name.trim() === '') {
      return Alert.alert('Tên không được để trống');
    }

    if (email.trim() === '') {
      return Alert.alert('Email không được để trống');
    }
    if (password.trim() === '') {
      return Alert.alert('Mật khẩu không được để trống');
    }

    if (confirmPass.trim() === '') {
      return Alert.alert('Mật khẩu không được để trống');
    }
    if (password.trim() !== confirmPass.trim()) {
      return Alert.alert('Mật khẩu không khớp');
    }
    fetch(localhost+'api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.code);
        setProgess(false);
        if (data.code === 200) {
          return navigation.navigate('Login');
          //Alert.alert('Đăng ký thành công');
        } else {
          Alert.alert('False', 'Error:' + data.message, [
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar hidden={true} backgroundColor="#0B193F" />
        <ImageBackground
          style={{flex: 1}}
          source={require('../../img/signup.jpg')}>
          <View style={{marginTop: 120, marginLeft: 30}}>
            <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>
              New User
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Signup</Text>
            <View style={styles.inputInfo}>
              <TextInput
                placeholder="Enter your name"
                style={styles.textInput}
                value={name}
                onChangeText={text => setName(text)}></TextInput>
              <TextInput
                placeholder="Enter your email"
                style={styles.textInput}
                value={email}
                onChangeText={text => setEmail(text)}></TextInput>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                value={password}
                onChangeText={text => setPassword(text)}></TextInput>
              <TextInput
                placeholder="Cofirm Password"
                style={styles.textInput}
                value={confirmPass}
                onChangeText={text => setConfirmPass(text)}></TextInput>
            </View>
            <TouchableOpacity onPress={singup} style={styles.signup}>
              {!progess && (
                <Text style={{fontSize: 25, color: '#fff', fontWeight: '200'}}>
                  Signup
                </Text>
              )}

              {progess && <ActivityIndicator size="large" color="#0000ff" />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={[styles.signup, styles.login]}>
              <Text style={{fontSize: 25, color: '#fff', fontWeight: '200'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 20,
  },
  inputInfo: {
    marginHorizontal: 20,
    minHeight: 100,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textInput: {
    height: 60,
    borderBottomWidth: 0.2,
    fontSize: 20,
    paddingLeft: 10,
  },
  signup: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#36444B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#6660BD',
    marginTop: 10,
  },
});
