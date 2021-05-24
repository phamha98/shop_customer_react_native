import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../../component/Header';
export default function Insert({navigation}) {
  const [sizeDefault, setSizeDefault] = useState('0');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          title="Thêm sản phẩm vào kho"
          background="pink"
          navigation={navigation}
        />

        <View style={styles.viewInput}>
          <Text style={{width: 100}}>Tên sản phẩm:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập vào tên sản phâm"></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Text style={{width: 100}}>Thông tin:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập vào tên sản phâm"></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Text style={{width: 100}}> genre:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập vào genre"></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Text style={{width: 100}}>colour:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập vào colour"></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Text style={{width: 100}}>Price:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập vào price"></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Text style={{width: 100}}>Chọn ảnh chính</Text>
          <TouchableOpacity style={styles.btnImg}>
            <Text>Đi đến thư mục</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewInput}>
          <Text style={{width: 100}}>Chọn các ảnh mô tả</Text>
          <TouchableOpacity style={styles.btnImg}>
            <Text>Đi đến thư mục</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSize}>
          <Text>Chọn size và số lượng</Text>
          <View style={styles.viewContentSize}>
            <Text style={{margin: 5}}>S:</Text>
            <TextInput
              style={{width: 100, paddingHorizontal: 5}}
              placeholder="number"
              value={sizeDefault}
              onChangeText={text => setSizeDefault(text)}></TextInput>
          </View>
          <View style={styles.viewContentSize}>
            <Text style={{margin: 5}}>M:</Text>
            <TextInput
              style={{width: 100, paddingHorizontal: 5}}
              placeholder="number"
              value={sizeDefault}
              onChangeText={text => setSizeDefault(text)}></TextInput>
          </View>
          <View style={styles.viewContentSize}>
            <Text style={{margin: 5}}>L:</Text>
            <TextInput
              style={{width: 100, paddingHorizontal: 5}}
              placeholder="number"
              value={sizeDefault}
              onChangeText={text => setSizeDefault(text)}></TextInput>
          </View>
          <View style={styles.viewContentSize}>
            <Text style={{margin: 5}}>XL:</Text>
            <TextInput
              style={{width: 100, paddingHorizontal: 5}}
              placeholder="number"
              value={sizeDefault}
              onChangeText={text => setSizeDefault(text)}></TextInput>
          </View>
          <View style={styles.viewContentSize}>
            <Text style={{margin: 5}}>2XL:</Text>
            <TextInput
              style={{width: 100, paddingHorizontal: 5}}
              placeholder="number"
              value={sizeDefault}
              onChangeText={text => setSizeDefault(text)}></TextInput>
          </View>
        </View>
        <TouchableOpacity style={[styles.btnImg, {height: 40}]}>
          <Text>Thêm sản phẩm vào kho</Text>
        </TouchableOpacity>
        <View style={{marginVertical: 50}}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 5,
    marginVertical: 8,
    minHeight: 50,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  viewInput: {
    marginHorizontal: 10,
    marginVertical: 5,
    minHeight: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 5,
    maxWidth: 270,
    minHeight: 30,
  },
  btnImg: {
    height: 30,
    backgroundColor: 'red',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4C94E7',
  },
  viewSize: {
    marginHorizontal: 10,
    marginVertical: 5,
    minHeight: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 5,
  },
  viewContentSize: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});
