import {StyleSheet,Dimensions,} from 'react-native'
    const {width, height} = Dimensions.get('window');

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
      borderBottomWidth:20,
      borderBottomColor:"#E77DEB70"
    },
    viewProduct:{
      width: width / 2 - 10,
      minHeight: 300,
      // backgroundColor: '#fff',
      marginVertical: 8,
      marginHorizontal: 5,
      borderRadius: 5,
      overflow: 'hidden',
    },
    viewImage:{
      width: '100%',
      minHeight: 250,
      resizeMode: 'stretch',
      borderRadius: 5,
      overflow: 'hidden',
    }
    
  });
  export default styles;