import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../../component/AppContext';
export default function index({route, navigation}) {
  const {token} = useContext(AppContext);

  const {data} = route.params;
  const [oldPass, setOldPass] = useState('');
  const [pass, setPass] = useState('');
  const [cofirmPass, setCofirmPass] = useState('');
  const changepass = () => {
    if (oldPass.trim() === '' || pass.trim() === '' || cofirmPass.trim() === '')
      return alert('truong khong duoc de trong');
    if (pass.trim() !== cofirmPass.trim()) return alert('mat khau khong khop');
    fetch('http://127.0.0.1:8000/api/usercontroller/updatepass', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
        id_user: data.id,
        email: data.email,
        password: pass,
        oldpass: oldPass,
      }),

    }).then(response => response.json())
      .then(data => {
        console.log(data.code);
        //setProgess(false);
        if (data.code === 200) {
          return navigation.navigate('Person');
        } 
        if (data.code === 401) {
            return alert(data.msg)
        }
      })
      .catch(e => console.log(e));
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../img/signup.jpg')}>
        <Header
          navigation={navigation}
          background={null}
          title="Changepass"></Header>
        <View style={styles.content}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
            Change Password!
          </Text>
          <TextInput
            placeholder="Enter your old password"
            style={styles.textInput}
            value={oldPass}
            onChangeText={text => setOldPass(text)}></TextInput>
          <TextInput
            placeholder="Enter your password"
            style={styles.textInput}
            value={pass}
            onChangeText={text => setPass(text)}></TextInput>
          <TextInput
            placeholder="Enter your confirm password"
            style={styles.textInput}
            value={cofirmPass}
            onChangeText={text => setCofirmPass(text)}></TextInput>

          <TouchableOpacity onPress={changepass} style={styles.send}>
            <Text style={{fontSize: 25, color: '#fff'}}>Send</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 30,
    marginVertical: 50,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  textInput: {
    width: 280,
    minHeight: 50,
    marginHorizontal: 3,
    marginVertical: 5,
    borderBottomWidth: 0.2,
    fontSize: 18,
  },
  send: {
    width: 250,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04B8FF',
    marginVertical: 20,
  },
});
