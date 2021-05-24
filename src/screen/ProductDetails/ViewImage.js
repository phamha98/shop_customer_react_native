import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import styles from './styles'
function ViewImage({ uri }) {
  return (
    <View style={styles.containerImg}>
        <Image style={styles.containerImage} source={{ uri }} />
      
    </View>
  );
}
 
export default ViewImage;
