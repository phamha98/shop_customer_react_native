import {StyleSheet, Dimensions} from 'react-native';
const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    width: dimensions.width,
    height: dimensions.width * 1.1,
    alignItems: 'center',
    backgroundColor: '#b0baba',
 
  },

  containerImage: {
    width: 500,
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    marginHorizontal: 5,
    marginVertical: 8,
    padding: 5,
    borderTopWidth: 0.5,
    marginBottom: 500,
  },
  viewBuy: {
    width: '100%',
  },
  buyDetails: {
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    padding: 10,
  },
  buyBotton: {
    width: '100%',
    height: 60,
    borderTopWidth: 0.5,
    backgroundColor: '#EBCBCB',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowBuyDetails: {
    height: 50,
    marginHorizontal:5,
    borderBottomWidth: 0.2,
    justifyContent: 'center',
  },
  rowBuyNumber: {
    height: 50,
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
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

export default styles;
