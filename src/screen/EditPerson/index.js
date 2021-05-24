import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../../component';
import {AppContext} from '../../component/AppContext';
export default function index({route, navigation}) {
  const {token, idUser,setLEP,lEP} = useContext(AppContext);
  const {transData} = route.params;
  const [data, setData] = useState(transData);
  const [address, setAddress] = useState(data.address);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [img, setImg] = useState(data.img);
  const update = () => {
    fetch('http://127.0.0.1:8000/api/usercontroller/update', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
        id_user: idUser,
        name: name,
        phone: phone,
        address: address,
        img: img,
      }),
    });
    setLEP(!lEP);
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar hidden={true} backgroundColor="#0B193F" />

        <ImageBackground
          style={{flex: 1}}
          source={require('../../img/signup.jpg')}>
          <Header background={null} navigation={navigation} />
          <View style={styles.content}>
            <View style={[styles.viewChildren, {alignItems: 'center'}]}>
              <TextInput
                placeholder="Name"
                style={{fontSize: 28, fontWeight: 'bold'}}
                value={name}
                onChangeText={text => setName(text)}></TextInput>
            </View>
            <View style={styles.viewChildren}>
              <TextInput
                placeholder="Phone"
                style={styles.textInput}
                value={phone}
                onChangeText={text => setPhone(text)}></TextInput>
            </View>
            <View style={styles.viewChildren}>
              <TextInput
                placeholder="Address"
                style={styles.textInput}
                value={address}
                onChangeText={text => setAddress(text)}></TextInput>
            </View>
            <TouchableOpacity onPress={update} style={styles.logout}>
              <Text style={{fontSize: 25, color: '#fff', fontWeight: '200'}}>
                Save{'  '}
                <Ionicons
                  style={{position: 'absolute', top: 15, right: 40}}
                  name="checkmark-done-outline"
                  size={25}
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgAvatar}>
              <Image
                source={{uri: img}}
                style={{width: 100, height: 100, resizeMode: 'contain'}}
              />
              <Ionicons
                style={{position: 'absolute', top: 35, right: 35}}
                name="brush"
                size={28}
                color="blue"
              />
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
    backgroundColor: '#FFFFFFAB',
    marginHorizontal: 50,
    minHeight: 400,
    marginTop: 100,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 70,
  },
  imgAvatar: {
    backgroundColor: 'red',
    position: 'absolute',
    top: -50,
    left: 80,
    borderRadius: 25,
    overflow: 'visible',
  },
  viewChildren: {
    width: '100%',
    minHeight: 20,
    borderBottomWidth: 0.2,
  },
  logout: {
    height: 40,
    width: 200,
    marginTop: 80,
    borderRadius: 10,
    backgroundColor: '#406C81',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
