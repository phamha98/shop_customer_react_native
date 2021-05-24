import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../../../component/Header'
export default function index({navigation}) {
    return (
        <View style={styles.container}>
            <Header title="Quản lý nhân viên" navigation={navigation}/>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1}
})
