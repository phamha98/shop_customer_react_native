import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../component/AppContext';
import {
  Button,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatchs} from 'react-redux';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {AddCart, GetCountId, DecreaseQuantity} from '../../redux/action';
export default function BuyProduct({buyData, sizeProduct, navigation}) {
  const dispatch = useDispatch();
  //const Cartz = useSelector(state => state._todoProduct.Carts);

  console.log("numberCart:"+useSelector(state => state._todoProduct.numberCart)); ;
  
 
  const [isShow, setIsShow] = useState(true);
  const {productArray, setProductArray} = useContext(AppContext);
  const [productSize, setProductSize] = useState({});
console.log(productSize);
  //////////////*  */
  const themvaogiohang=()=>{
    dispatch(AddCart({data: productSize}));

  }
 
  ///////////
  const renderNumber = () => {
    if (Object.keys(productSize).length === 0) {
      //dem phan tu product
      return 0;
    } 
    return productSize.count;
  };
  const handleAdd = () => {
    if (idProduct === '') return null;
    if (Object.keys(productSize).length === 0) {
      //=>length
      return setProductSize({ 
        buyData: buyData,
        count: 1,
        id: idProduct,
        size: select,
      });
    }
    if(productSize.count===wareHouse) return alert("sp chi con"+wareHouse)
    setProductSize(state => {
          return {
            ...state,
            count: state.count + 1,
          };
        });
  }
/* shirt_all+A */
  const handleSub = () => {
    if (idProduct === '') return null;
    if (productSize.count === 0) {
      //=>length
      return null;
    }
    setProductSize(state => {
      return {
        ...state,
        count: state.count - 1,
      };
    });
  };

  const [idProduct, setIdProduct] = useState('');
  const [idSize, setIdSize] = useState('');
  const [select, setSelect] = useState('');
  const renderColor = nameTab => (nameTab === select ? '#FD0901' : '#415E41');
  const [wareHouse, setWareHouse] = useState(0);

  const priceBuy = () => {
    return null;
  };
  const orderCart = () => {
    if(productSize.count>wareHouse) return alert("VUI LONG CHON LAI SP, sp chi con"+wareHouse)
 
    dispatch(AddCart({data: productSize}));
    setIsShow(false);
    setIdProduct('');
    setSelect('');
    setWareHouse(0);

    setProductArray(state => {
      return [...state, productSize];
    });
    setProductSize({});
  };
  return (
    <View style={styles.viewBuy}>
      {isShow && (
        <View style={styles.buyDetails}>
          <TouchableOpacity onPress={() => setIsShow(false)}>
            <Ionicons name="close-outline" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 0.5,
              paddingVertical: 10,
            }}>
            <Image
              source={{uri: buyData.img}}
              style={{width: 100, height: 100, resizeMode: 'stretch'}}></Image>
            <View style={{padding: 10}}>
              <Text style={{paddingTop: 20}}>
                <Text
                  style={{
                    textDecorationLine: 'underline line-through',
                    fontSize: 20,
                    color: 'gray',
                    fontWeight: 'bold',
                  }}>
                  đ{buyData.price}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  đ{buyData.price}
                </Text>
              </Text>
              <Text>Kho:{wareHouse}</Text>
            </View>
          </View>
          <View style={styles.rowBuyDetails}>
            <Text style={{fontSize: 18}}>{buyData.name}</Text>
          </View>
          <View
            style={[
              styles.rowBuyDetails,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <Text style={{fontSize: 18}}>size</Text>
            <View style={{flexDirection: 'row'}}>
              {sizeProduct.map((item, index) => (
                <View key={index}>
                  {item.number !== 0 && (
                    <TouchableOpacity
                      style={{
                        width: 50,
                        height: 30,
                        backgroundColor: renderColor(item.size),
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        idProduct === ''
                          ? setSelect(item.size)
                          : renderNumber() !== 0
                          ? setProductSize(state => {
                              return {
                                ...state,
                                id: item.id,
                                size: item.size,
                              };
                            })
                          : null;
                        setSelect(item.size);
                        setIdProduct(item.id);

                        setWareHouse(item.number);
                      }}>
                      <Text>{item.size}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.rowBuyNumber}>
            <Text style={{fontSize: 18}}>number</Text>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.buyAdd,
                  {backgroundColor: idProduct === '' ? 'gray' : 'red'},
                ]}
                onPress={handleAdd}>
                <Text style={{fontSize: 20}}>+</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 25}}>{renderNumber()}</Text>
              <TouchableOpacity
                style={[
                  styles.buyAdd,
                  {backgroundColor: idProduct === '' ? 'gray' : 'red'},
                ]}
                onPress={handleSub}>
                <Text style={{fontSize: 18}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rowBuyDetails}>
            <Text style={{fontSize: 18}}>
              {productSize.count}
              {'san pham cho'}
              {productSize.id}
            </Text>
          </View>
          {renderNumber() !== 0 && (
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                left: 50,
                borderRadius: 5,
                overflow: 'hidden',
              }}>
              <TouchableOpacity
                onPress={orderCart}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 300,
                  height: 45,
                  backgroundColor: 'red',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Thêm vào giỏ hàng
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {!isShow && (
        <View style={styles.buyBotton}>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="box" size={40} color="red" />
            <View
              style={{
                flexDirection: 'column',
                marginHorizontal: 10,
              }}>
              <Text style={{fontWeight: 'bold'}}>7500đ</Text>
              <Text>7500đ</Text>
            </View>
          </View>
          {!isShow && (
            <TouchableOpacity
              onPress={() => setIsShow(!isShow)}
              style={{flexDirection: 'column', alignItems: 'center'}}>
              <MaterialIcons name="add-shopping-cart" size={35} color="blue" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{
              width: 130,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Giao hàng
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

 
