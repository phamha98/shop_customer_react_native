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
  ScrollView,SafeAreaView ,
  ActivityIndicator,LogBox 
} from 'react-native';

export default function Test({navigation}) {
    // useEffect(() => {
    //     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    // }, [])
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <ScrollView >
            
          {/* <FlatList
            style={{width: 200}}
            data={data}
            renderItem={({item}) => (
              <View style={{backgroundColor: 'blue', width: 200}}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
              </View>
            )}
          /> */}
          {data.map((item,index)=>(
              <View key={index} style={{backgroundColor: 'red'}}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
          ))}
          {data.map((item,index)=>(
              <View key={index} style={{backgroundColor: 'blue'}}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
          ))}
          {/* <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={{backgroundColor: 'red'}}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
              </View>
            )}
          /> */}
          <View style={{marginBottom: 100}}></View>
        </ScrollView> 
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const data = [
  {id: 1, name: 'dada45sdsdasd'},
  {id: 2, name: 'dasdaf3423bgsdasd'},
  {id: 3, name: 'dasdat234dersdaasd'},
  {id: 4, name: 'dasdty4234rtyasd'},
  {id: 5, name: 'dasdt3werasd'},
  {id: 6, name: 'dada45sdsdasd'},
  {id: 7, name: 'dasdaf3423bgsdasd'},
  {id: 8, name: 'dasdat234dersdaasd'},
  {id: 9, name: 'dasdty4234rtyasd'},
  {id: 10, name: 'dasdt3werasd'},
  {id: 11, name: 'dada45sdsdasd'},
  {id: 12, name: 'dasdaf3423bgsdasd'},
  {id: 13, name: 'dasdat234dersdaasd'},
  {id: 14, name: 'dasdty4234rtyasd'},
  {id: 15, name: 'dasdt3werasd'},
  {id: 16, name: 'dada45sdsdasd'},
  {id: 17, name: 'dasdaf3423bgsdasd'},
  {id: 18, name: 'dasdat234dersdaasd'},
  {id: 19, name: 'dasdty4234rtyasd'},
  {id: 20, name: 'dasdt3werasd'},
];
