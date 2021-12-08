import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Button,
} from 'react-native';

const TextInputPractice1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onPressCheck = () => {
      if(!name){
          alert('Please Enter Name');
      } else if(!email){
          alert('Please Enter Email')
      } else {
          alert('Success')
      }
    
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.sectionStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter your name"
            underlineColorAndroid="transparent"
            onChange={setName}></TextInput>
        </View>
        <View style={styles.sectionStyle}> 
          <TextInput
            style={{flex: 1}}
            placeholder="Enter E-mail"
            underlineColorAndroid="transparent"
            onChange={setEmail}></TextInput>
        </View>
        <Button onPress={onPressCheck} title="Submit" color="#841584" />
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
});
