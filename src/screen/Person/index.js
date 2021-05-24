import React, {useState, useEffect, useContext} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  DatePickerAndroid,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../../component';

import {AppContext} from '../../component/AppContext';

export default function index({navigation}) {
  const {token, idUser,lEP} = useContext(AppContext);
  const [data, setData] = useState();
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [phone, setPhone] = useState('phomne');
  const [img, setImg] = useState(
    'https://snkrvn.com/wp-content/uploads/2017/09/justin-bieber-hm-merch-26.jpg',
  );
  const [address, setAddress] = useState([]);

  const [progess1, setProgess1] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/usercontroller/show', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_user: idUser,
        token: token,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setData(data.data);
        setAddress(data.data.address);
        setName(data.data.name);
        setPhone(data.data.phone);
        setEmail(data.data.email);
        setImg(data.data.img);
        setProgess1(false);
      })
      .catch(e => console.log(e));
  }, [lEP]);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor="#0B193F" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../img/signup.jpg')}>
        <View style={styles.content}>
          <View style={[styles.viewChildren, {alignItems: 'center'}]}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>{name}</Text>
            <Text>@{name}</Text>
          </View>
          <View style={styles.viewChildren}>
            <Text>Phone:{phone} </Text>
          </View>
          <View style={styles.viewChildren}>
            <Text>Email: {email}</Text>
          </View>
          <View style={styles.viewChildren}>
            <Text>Address {address}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.logout}>
            <Text style={{fontSize: 25, color: '#fff', fontWeight: '200'}}>
              Logout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePass',{data:data})}
            style={styles.logout}>
            <Text style={{fontSize: 25, color: '#fff', fontWeight: '200'}}>
              ChangePass
            </Text>
          </TouchableOpacity>
          <Ionicons
            style={{position: 'absolute', top: 15, right: 40}}
            name="brush"
            size={28}
            onPress={() =>
              navigation.navigate('EditPerson', {
                transData: data,
              })
            }
          />
          <View style={styles.imgAvatar}>
            <Image
              source={{uri: img}}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            {progess1 && <ActivityIndicator size="large" color="#FF7B00" />}
          </View>
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
    backgroundColor: '#FFFFFFAB',
    marginHorizontal: 50,
    height: 400,
    marginTop: 150,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 70,
  },
  imgAvatar: {
    position: 'absolute',
    top: -50,
    left: 80,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  viewChildren: {
    width: '100%',
    marginVertical: 2,
    paddingVertical: 5,
    borderBottomWidth: 0.2,
  },
  logout: {
    height: 40,
    width: 200,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#406C81',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
