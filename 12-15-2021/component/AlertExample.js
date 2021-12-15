import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
const AlertExample = () => {
    const simpleAlertHandler = () => {
        alert ("Hello Simple Alert")
    }

    const twoOptionHandler = () => {
        Alert.alert(
            "Hello",
            "I am two option alert, Do you want to cancel me?",
            [
                {
                    text:"Yes",
                    onPress: () => console.log("Yes pressed")
                },
                {
                    text:"No",
                    onPress: () => console.log("No pressed")
                },
                {cancelable:true}
            ]
        )
    }

    const thereeOptionHandler = () => {
        Alert.alert(
            "Hello",
            "I am three option alert, Do you want to cancel me?",
            [
                {
                    text:"Maybe",
                    onPress: () => console.log("Maybe pressed")
                },
                {
                    text:"Yes",
                    onPress: () => console.log("Yes pressed")
                },
                {
                    text:"No",
                    onPress: () => console.log("No pressed")
                },
                {cancelable:true}
            ]
        )
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style = {Styles.container}>
                <Button title="Simple Alert" onPress={simpleAlertHandler}/>
                <Button title="Alert with two option" onPress={twoOptionHandler}/>
                <Button title="Alert with three option" onPress={thereeOptionHandler}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});

export default AlertExample;