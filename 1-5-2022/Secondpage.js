import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Secondpage = ({route}) => {
    const {name} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
        React Native Pass Value From one Screen
      </Text>
            <Text>Value pass from first page : {name}</Text>
        </View>
    )
}

export default Secondpage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#DBDBD6',
    },
  });