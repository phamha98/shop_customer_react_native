import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import data from '../../../../data/data';
import Header from '../../../../component/Header';
export default function Update({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Danh sách" background="pink" navigation={navigation}/>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ItemProduct item={item} navigation={navigation} />
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 5,
    minHeight: 50,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
const ItemProduct = ({item, navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles2.container}>
      <View style={{borderRightWidth: 0.2, height: 300, padding: 5}}>
        <Image source={{uri: item.thumbImage}} style={styles2.img} />
      </View>
      <View style={styles2.content}>
        <Text style={styles2.text}>Tên sản phẩm:{item.name}</Text>
        <Text style={styles2.text}>Giá:${item.price}</Text>
        <Text style={styles2.text}>size:M</Text>
        <Text style={styles2.text}>Loai</Text>
        <Text style={styles2.text}>Loai</Text>
        <Text style={styles2.text}>Loai</Text>
        <Text style={styles2.text}>Loai</Text>
        <Text style={styles2.text}>Loai</Text>
        <Text style={styles2.text}>Loai</Text>
        <View style={styles2.chose}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Insert')}
            style={styles2.btnChose}>
            <Text>Chinh sua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles2.btnChose}>
            <Text>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles2 = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    minHeight: 300,
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    width: 250,
    flexDirection: 'column',
    marginLeft: 10,
    padding: 5,
  },
  text: {
    maxWidth: 250,
    fontSize: 15,
    color: '#000',
  },
  chose: {
    flexDirection: 'row',
  },
  btnChose: {
    width: 80,
    height: 30,
    backgroundColor: 'red',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4C94E7',
  },
});
