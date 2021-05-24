import React, {useState, useEffect, useContext} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Search} from '../../component';
import {AppContext} from '../../component/AppContext';
import {useSelector, useDispatch} from 'react-redux';
import {AddCart, GetCountId, DecreaseQuantity,DeleteCart} from '../../redux/action';
export default function index({navigation}) {
  const {token, productArray, setProductArray} = useContext(AppContext);
  const dispatch = useDispatch();
  const Cartz = useSelector(state => state._todoProduct.Carts);
  console.log(useSelector(state => state._todoProduct.Carts)); ;

  const [productSize, setProductSize] = useState({});

  const handleAdd = idProduct => {
    let key = productArray.findIndex(item => item.id === idProduct);
    setProductSize(productArray.find(item => item.id === idProduct));
    // console.log(productSize);
    setProductSize(state => {
      return {
        ...state,
        count: state.count++,
      };
    });
    setProductArray(productArray.splice(key, 1, productSize));
    //  console.log(productSize);
    //  console.log("key:"+key);
    //  setProductArray((state) => {
    //   return [...state, productSize];
    // });
  };

  const handleSub = idProduct => {
    setProductSize(productArray.filter(item => item.id !== idProduct));

    if (productSize.count === 0) {
      //=>length
      return alert('Ban muon bo san pham nay');
    }
    setProductSize(state => {
      return {
        ...state,
        count: state.count - 1,
      };
    });
  };
  const deleteItem = (id,quantity) => {
    dispatch(DeleteCart({id: id,quantity:quantity}));
    //alert(id) ;alert(quantity)
  };
  return (
    <View style={styles.container}>
      <Header
        onClickLeft={() => navigation.openDrawer()}
        background="pink"
        navigation={navigation}
        colorIcon="#030303A8"
        leftNameIcon="menu-outline"
        title="Giỏ hàng của bạn"
      />
      <ScrollView>
        <View style={styles.viewPerson}>
          <Text>safass </Text>
        </View>
        <View style={{marginHorizontal: 10, minHeight: 100}}>
          {Cartz.map((item, index) => (
            <TouchableOpacity
              onPress={() => deleteItem(item.id,item.quantity)}
              key={index}
              style={{
                borderWidth: 1,
                backgroundColor: 'red',
                margin: 5,
                borderRadius: 5,
                padding: 5,
              }}>
                
              <Text style={{fontSize: 25}}>ID:{item.id}</Text>
              <Text style={{fontSize: 25}}>quantity:{item.quantity}</Text>
              <Text style={{fontSize: 15}}>name:{item.buyData.name}</Text>
              <Text style={{fontSize: 25}}>price:{item.buyData.price}</Text>
              <Text style={{fontSize: 25}}>size:{item.size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* {productArray
          //.filter((item) => item.count !== 0) //filter !=0
          .map((item, index) => {
            return (
              <View style={styles.rowProduct} key={index}>
                <Image
                  source={{uri: item.buyData.img}}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'stretch',
                  }}></Image>
                <View style={{paddingHorizontal: 5}}>
                  <Text style={styles.textProduct}>{item.buyData.name}</Text>
                  <Text style={styles.textNumber}>Số lượng: {item.count}</Text>
                  <Text style={styles.textNumber}>
                    Giá tiền:{item.count} * {item.buyData.sale}=
                    {item.count * item.buyData.sale}đ
                  </Text>
                  <Text style={styles.textNumber}>
                    Size:{item.size}
                    {item.id}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={styles.buyAdd}
                      onPress={() => handleAdd(item.id)}>
                      <Text style={{fontSize: 20}}>+</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20}}>{item.count}</Text>
                    <TouchableOpacity style={styles.buyAdd}>
                      <Text style={{fontSize: 18}}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })} */}
      </ScrollView>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPerson: {
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: 'red',
  },
  rowProduct: {
    marginHorizontal: 5,
    marginVertical: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#343697',
    padding: 5,
  },
  textProduct: {
    color: '#295BE4',
    fontSize: 18,
    maxWidth: 300,
    fontWeight: '400',
  },
  textNumber: {
    color: '#000',
    fontSize: 16,
  },
  buyAdd: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
///////////////////
