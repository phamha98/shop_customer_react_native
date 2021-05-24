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
  ActivityIndicator,
  LogBox,
  Button,
} from 'react-native';
import {AppContext} from '../../component/AppContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
////*** */
import styles from './styles';
import ItemCategories from './ItemCategories';
import ItemNewProduct from './ItemNewProduct';
import ItemSale from './ItemSale';
import ItemGender from './ItemGender';
import {Header, Search} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemProduct from './ItemProduct';
import localhost from '../../api'
export default function index({navigation}) {
  const {
    token,
    gender,
    setGender,
    datasale,
    setDatasale,
    dataall,
    setDataall,
    datanew,
    setDatanew,
  } = useContext(AppContext);
   const [genderData, setGenderData] = useState();
   const [load, setLoad] = useState(false);
   const [refreshing, setRefreshing] = useState(false);

  const [progess, setProgess] = useState(true);
  const [progess1, setProgess1] = useState(true);
  const [progessGender, setProgessGender] = useState(false);
  const [showGender, setShowGender] = useState(false);


  // //**** sale */
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/saleproduct', {
  //     method: 'GET',
  //     headers: {
  //       token: token,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       //console.log(data.data);
  //       setDatasale(data.data);
  //     })
  //     .catch(e => console.log(e));
  // }, []);
  // //**new */
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/newproductdetails', {
  //     method: 'GET',
  //     headers: {
  //       token: token,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setRefreshing(false);
  //       //console.log(data.data);
  //       setDatanew(data.data);
  //     })
  //     .catch(e => console.log(e));
  // }, []);
  // //**** filter */
  // useEffect(() => {
  //   setProgessGender(true);
  //   fetch('http://127.0.0.1:8000/api/filterproduct', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       token: token,
  //     },
  //     body: JSON.stringify({
  //       filter: gender,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       //console.log(data.data);
  //       setGenderData(data.data);
  //       setProgessGender(false);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }, [gender]);
  //**** all */
  useEffect(() => {
    console.log("wait Dang load san pham")
    fetch(localhost+'/api/productdetails', {
      method: 'GET',
      headers: {
        token: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data.data);
        setRefreshing(false);
        setDataall(data.data);
        console.log("ok set up san pham")
      })
      .catch(e => console.log(e))
      .finally(() => setProgess(false));;;
  }, [load]);
  const handleRefreshing = () => {
    setRefreshing(true);
    setLoad(!load);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView> */}
      <View style={styles.container}>
        <StatusBar hidden={true} backgroundColor="#0B193F" />
        <Header
        onClickLeft={()=>navigation.openDrawer()}
          background={null}
          navigation={navigation}
          colorIcon="#030303A8"
          leftNameIcon="menu"
          title="   SHOP"
        />
        <Search background="pink" />

        <View
          style={{
            width: 400,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: 5,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Tất cả sản phẩm
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: '#ECE4E4',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              onPress={() => setShowGender(!showGender)}
              name={showGender ? 'caret-up-outline' : 'caret-down-outline'}
              size={30}
            />
          </View>
        </View>
        {showGender && (
          <View style={styles.categories}>
            <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 20}}>
              Gender
            </Text>
            <FlatList
              data={categories}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ItemGender item={item} />}
              horizontal={true}></FlatList>
          </View>
        )}
        {showGender && (
          <View style={styles.categories}>
            <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 20}}>
              Categories1
            </Text>
            <FlatList
              data={categories2}
              numColumns={3}
              onEndReachedThreshold={0.2}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <ItemCategories item={item} />
              )}></FlatList>
          </View>
        )}

        {/* <View style={styles.product}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {'  '}Sản phẩm danh cho {gender}
            </Text>
            {progessGender && (
              <ActivityIndicator size="large" color="#FF7B00" />
            )}
            {!progessGender && (
              <FlatList
                data={genderData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <ItemProduct item={item} navigation={navigation} />
                )}
                numColumns={2}></FlatList>
            )}
          </View> */}

        {/* <View style={styles.product}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {'  '}Sản phẩm mới
            </Text>
            {progess1 && <ActivityIndicator size="large" color="#FF7B00" />}
            <FlatList
              data={newProduct}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <ItemNewProduct item={item} navigation={navigation} />
              )}
              horizontal={true}></FlatList>
          </View> */}
        {/* <View style={styles.product}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{'  '}Sale</Text>
            {progess1 && <ActivityIndicator size="large" color="#0000ff" />}
            <FlatList
              data={saleProduct}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <ItemSale item={item} navigation={navigation} />
              )}
              numColumns={2}></FlatList>
          </View> */}
        <View style={styles.product}>
        {progess && (
              <ActivityIndicator size="large" color="#FF7B00" />
            )}
          <FlatList
          onRefresh={handleRefreshing}
          refreshing={refreshing}
            showsVerticalScrollIndicator={false}
            data={dataall}
            onScroll={() => setShowGender(false)}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <ItemProduct item={item} navigation={navigation} />
            )}
            numColumns={2}></FlatList>
        </View>
        <View style={{marginBottom: 50}}></View>
      </View>
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  );
}

const categories = [
  {id: 0, gender: 'Nam', name: 'Men', icon: 'man-outline'},
  {id: 1, gender: 'Nu', name: 'Woman', icon: 'woman-outline'},
  {id: 2, gender: 'Treem', name: 'Children', icon: 'american-football-outline'},
  {id: 3, gender: 'Nguoigia', name: 'Old', icon: 'woman-outline'},
  {id: 4, gender: 'Tatca', name: 'All', icon: 'woman-outline'},
];
const categories2 = [
  {
    id: 0,
    name: 'Áo',
    icon: 'man-outline',
    img:
      'https://www.shophaiyen.com/wp-content/uploads/2018/09/M%E1%BA%B7t-sau-%C3%81o-thun-3D-Th%C3%A1i-Lan-1.jpg',
  },
  {
    id: 1,
    name: 'Đầm',
    icon: 'woman-outline',
    img: 'https://sagasilk.com/wp-content/uploads/dam-to-tam-cao-cap.jpg',
  },
  {
    id: 2,
    name: 'Váy',
    icon: 'american-football-outline',
    img:
      'https://media3.scdn.vn/img3/2019/4_5/WZVc0y_simg_de2fe0_500x500_maxb.jpg',
  },
  {
    id: 3,
    name: 'Quần',
    icon: 'woman-outline',
    img: 'https://agiare.vn/wp-content/uploads/2018/12/quan-ong-rong-dep.jpg',
  },
  {
    id: 4,

    name: 'Giầy',
    icon: 'woman-outline',
    img:
      'https://vn-test-11.slatic.net/p/e77f141f54d2eeba3b569cdd352ef885.png_720x720q80.jpg_.webp',
  },
  {
    id: 5,
    name: 'Dép',
    icon: 'woman-outline',
    img:
      'https://media3.scdn.vn/img4/2020/10_30/KU2PY2GXNUKSI9EgYsVO_simg_de2fe0_500x500_maxb.jpg',
  },
];
