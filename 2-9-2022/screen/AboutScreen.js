import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>AboutScreen</Text>
        </View>       
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})