import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Dimensions
  } from 'react-native';
 const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
 viewItem:{
    width: width / 2 - 10,
    minHeight: 300,
    // backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageItem:{
    width: '100%',
    minHeight: 250,
    resizeMode: 'stretch',
    borderRadius: 5,
    overflow: 'hidden',
  },saleItem:{
    width:40,
    height: 45,
    backgroundColor: 'red',
    position: 'absolute',
    right: 2,
    top: 2,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 10,
  },
  saleText:{
    fontWeight: 'bold',
    color: '#0178A7',
    fontSize: 18,
    textDecorationLine: 'underline line-through',
  }
});

export default styles;
