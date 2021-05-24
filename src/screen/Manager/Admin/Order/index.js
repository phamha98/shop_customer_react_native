import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Header from '../../../../component/Header';
export default function index({navigation}) {
  const [isConfirm, setIsConfirm] = useState(true);
  const [isTransport, setIstransport] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  return (
    <View style={styles.container}>
      <Header title="Quản lý đặt hàng" navigation={navigation} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            setIsConfirm(true);
            setIstransport(false);
            setIsComplete(false);
          }}
          style={{width: 100, height: 30, margin: 5, backgroundColor: 'pink'}}>
          <Text>Cho xac nhan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsConfirm(false);
            setIstransport(true);
            setIsComplete(false);
          }}
          style={{width: 100, height: 30, margin: 5, backgroundColor: 'pink'}}>
          <Text>Dang Giao</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsConfirm(false);
            setIstransport(false);
            setIsComplete(true);
          }}
          style={{width: 100, height: 30, margin: 5, backgroundColor: 'pink'}}>
          <Text>Da giao thanh cong</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{marginHorizontal: 10, minHeight: 100, backgroundColor: 'red'}}>
        <Content
          isConfirm={isConfirm}
          isTransport={isTransport}
          isComplete={isComplete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
function Content({isConfirm, isTransport, isComplete}) {
  if (isConfirm) {
    return (
      <View
        style={{marginHorizontal: 20, minHeight: 200, backgroundColor: 'red'}}>
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: 0,
            height: 30,
            backgroundColor: 'pink',
            marginVertical: 8,
          }}>
          <Text>Danh sach don hang cho xac nhan</Text>
        </View>
        <FlatList
          data={listConfirm}
          renderItem={({item}) => <ItemConfirm item={item} />}></FlatList>
      </View>
    );
  }

  if (isTransport) {
    return (
        <View
        style={{marginHorizontal: 20, minHeight: 200, backgroundColor: 'red'}}>
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: 0,
            height: 30,
            backgroundColor: 'pink',
            marginVertical: 8,
          }}>
          <Text>Danh sach don hang cho xac nhan</Text>
        </View>
        <FlatList
          data={listConfirm}
          renderItem={({item}) => <ItemTransport item={item} />}></FlatList>
      </View>
    );
  }
  if (isComplete) {
    return (
        <View
        style={{marginHorizontal: 20, minHeight: 200, backgroundColor: 'red'}}>
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: 0,
            height: 30,
            backgroundColor: 'pink',
            marginVertical: 8,
          }}>
          <Text>Danh sach don hang cho xac nhan</Text>
        </View>
        <FlatList
          data={listConfirm}
          renderItem={({item}) => <ItemComplete item={item} />}></FlatList>
      </View>
    );
  }
  else return null;
}

const listConfirm = [
  {
    id: 1,
    id_sp: 23,
    id_kh: 231,
    nameUser: 'pham minh quy',
    nameProduct: 'Quan bo den',
    number: 2,
    img: 'https://cardino.vn/wp-content/uploads/quan-jean-QJEA005-xanhtri.jpg',
    size: 'M',
  },
  {
    id: 2,
    id_sp: 23,
    id_kh: 231,
    nameUser: 'pham minh quy',
    nameProduct: 'Quan bo den',
    number: 2,
    img: 'https://cardino.vn/wp-content/uploads/quan-jean-QJEA005-xanhtri.jpg',
    size: 'M',
  },
  {
    id: 3,
    id_sp: 23,
    id_kh: 231,
    nameUser: 'pham minh quy',
    nameProduct: 'Quan bo den',
    number: 2,
    img: 'https://cardino.vn/wp-content/uploads/quan-jean-QJEA005-xanhtri.jpg',
    size: 'M',
  },
  {
    id: 4,
    id_sp: 23,
    id_kh: 231,
    nameUser: 'pham minh quy',
    nameProduct: 'Quan bo den',
    number: 2,
    img: 'https://cardino.vn/wp-content/uploads/quan-jean-QJEA005-xanhtri.jpg',
    size: 'M',
  },
];
const ItemConfirm = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 350,
        minHeight: 30,
        marginVertical: 5,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'column', width: 100, minHeight: 60}}>
        <Text style={{minWidth: 100}}>{item.nameUser}</Text>
        <Text style={{minWidth: 100}}>{item.nameProduct}</Text>
        <Image
          source={{uri: item.img}}
          style={{width: 50, height: 50, resizeMode: 'contain'}}></Image>
      </View>
      <TouchableOpacity
        style={{
          width: 80,
          height: 30,
          backgroundColor: 'blue',
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff'}}>Xac Nhan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 80,
          height: 30,
          backgroundColor: 'blue',
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff'}}>Xem chi tiet</Text>
      </TouchableOpacity>
    </View>
  );
};
const ItemTransport = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: 350,
          minHeight: 30,
          marginVertical: 5,
          backgroundColor: 'pink',
          padding: 10,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'column', width: 100, minHeight: 60}}>
          <Text style={{minWidth: 100}}>{item.nameUser}</Text>
          <Text style={{minWidth: 100}}>{item.nameProduct}</Text>
          <Image
            source={{uri: item.img}}
            style={{width: 50, height: 50, resizeMode: 'contain'}}></Image>
        </View>
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: 'blue',
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>Xac Nhan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: 'blue',
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>Xem chi tiet</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const ItemComplete = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: 350,
          minHeight: 30,
          marginVertical: 5,
          backgroundColor: 'pink',
          padding: 10,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'column', width: 100, minHeight: 60}}>
          <Text style={{minWidth: 100}}>{item.nameUser}</Text>
          <Text style={{minWidth: 100}}>{item.nameProduct}</Text>
          <Image
            source={{uri: item.img}}
            style={{width: 50, height: 50, resizeMode: 'contain'}}></Image>
        </View>
       
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: 'blue',
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>Xem chi tiet</Text>
        </TouchableOpacity>
      </View>
    );
  };
