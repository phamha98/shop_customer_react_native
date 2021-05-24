import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../component/AppContext';
import localhost from '../../api'
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

import {Header, Search} from '../../component';
import ViewImage from './ViewImage';
import BuyProduct from './BuyProduct';


export default function index({route, navigation}) {


  const {transData} = route.params;
  const {token, productArray, setProductArray} = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [imgAlbum, setImgAlbum] = useState();
  const [info, setInfo] = useState({
    name: '',
    price: '',
    sale: '',
    gender: '',
  });

  const [progess, setProgess] = useState(true);
  const [add, setAdd] = useState(false);
  //////////
  useEffect(() => {
    console.log("wait load");
    fetch(localhost+'api/product/show', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_type_details: transData.id,
        token: token,
      }),
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data.info);
        setImgAlbum(data.img);
        setInfo(data.info);
        setProduct(data.product);
        //console.log(data);
        setProgess(false);
        console.log("ok full");
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
       
      <Header
        onClickLeft={() => navigation.goBack()}
        rightIcon={true}
        rightNameIcon="cart"
        onClickRight={()=>navigation.navigate("Cart")}
        navigation={navigation}
        title={info.name}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {progess && <ActivityIndicator size="large" color="#0000ff" />}
        {!progess && (
          <FlatList
            horizontal={true}
            pagingEnabled={true}
            data={imgAlbum}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <ViewImage uri={item.name}></ViewImage>;
            }}
          />
        )}
        {!progess && (
          <View style={styles.content}>
            <Text style={{fontSize: 23}}>
              Sản phẩm:<Text style={{fontWeight: 'bold'}}>{info.name}</Text>
            </Text>
            <Text
              style={{
                textDecorationLine: 'underline line-through',
                fontSize: 20,
                color: 'blue',
                fontWeight: 'bold',
              }}>
              <Text style={{color: '#000'}}>Giá gốc:</Text>
              {info.price} VND
            </Text>
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
              <Text style={{color: '#000'}}>Giá khuyến mãi:</Text>
              {info.sale} VND
            </Text>
            <Text>Sản phẩm giành cho :{info.gender}</Text>
            <Text>Thông tin:</Text>
            <Text>{info.details}</Text>
            {product.map((item, index) => (
              <View key={index}>
                {item.number !== 0 && (
                  <View style={{flexDirection: 'row'}}>
                    <Text>
                      {item.size}
                      {':'}
                    </Text>
                    <Text>{item.number}</Text>
                  </View>
                )}
              </View>
            ))}
            {!add && (
              <Button title="Chọn mua" onPress={() => setAdd(true)}></Button>
            )}
          </View>
        )}
      </ScrollView>
      
      {add && (
        <BuyProduct
          buyData={info}
          sizeProduct={product}
          navigation={navigation}></BuyProduct>
      )}
    </View>
  );
}
