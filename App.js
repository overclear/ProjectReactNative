import React, {Component, useState} from "react";
import { StyleSheet,SafeAreaView,TextInput,Button,Text,View} from 'react-native';

const App = () => {
  const [inputValue,setInputValue] = useState('')
  const checkValueIsnumberorNot =() =>{
    if(isNaN(inputValue)){
      alert("It is not a number");
    }else{
      alert("It is a number");
    }
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.container}>
        <TextInput
          placeholder = "Enter Text"
          style = {styles.testInputStyle}
          onChangeText = {(inputValue)=>{setInputValue(inputValue)}}
        />
        <Button
        title = "Check Value Is number or Not"
        color = "#606070"
        onPress={checkValueIsnumberorNot}
        />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },

  testInputStyle: {
    textAlign: 'center',
    height: 50,
    width:'70%',
    marginBottom: 10,
    borderColor:'black'
  },
});

export default App;