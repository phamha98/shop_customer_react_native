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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Search} from '../../component';
import localhost from '../../api'
import {AppContext} from '../../component/AppContext';
import ItemSale from './ItemSale';
export default function index({navigation}) {
  const {token, datasale, setDatasale} = useContext(AppContext);
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [progess, setProgess] = useState(true);

  useEffect(() => {
    fetch(localhost+'api/saleproduct', {
      method: 'GET',
      headers: {
        token: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data.data);
        setRefreshing(false);
        setDatasale(data.data);
        ;
      })
      .catch(e => console.log(e))
      .finally(() => setProgess(false));;
  }, [load]);
  const handleRefreshing = () => {
    setRefreshing(true);
    setLoad(!load);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar hidden={true} backgroundColor="#0B193F" />
        <Header
         onClickLeft={()=>navigation.openDrawer()}
          background={null}
          navigation={navigation}
          colorIcon="#030303A8"
          leftNameIcon="menu-outline"
          title="   SHOP"
        />
        <Search background="pink" />
        <View style={[styles.product, {marginBottom: 150}]}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{'  '}Sale</Text>
          <FlatList
            onRefresh={handleRefreshing}
            refreshing={refreshing}
            showsVerticalScrollIndicator={false}
            data={datasale}
            initialNumToRender={4}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ItemSale item={item} navigation={navigation} />
            )}
            numColumns={2}></FlatList>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categories: {
    width: '100%',
    marginVertical: 8,
  },
  //product
  product: {
    width: '100%',
    marginBottom: 10,
    borderBottomWidth: 20,
    borderBottomColor: '#E77DEB70',
  },
});
