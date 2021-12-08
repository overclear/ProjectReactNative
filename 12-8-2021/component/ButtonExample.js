import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Button
} from 'react-native';

const ButtonExample = () => {
    const onPressAlert = () =>{
        alert('Hello');
    }
  return (
      <SafeAreaView style={{flex:1}}>
          <View style = {styles.container}>
              <Text style= {{marginBottom:20}}>Button Example</Text>
              <Button onPress = {onPressAlert} title = "Click me!" color = "#841584"/>
          </View> 

      </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
