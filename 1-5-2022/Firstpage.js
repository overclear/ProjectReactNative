import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Firstpage = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        React Native Pass Value From one Screen
      </Text>
      <Text style={styles.textStyle}>
        Please enter your name to pass it to next page
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your name"
        underlineColorAndroid="transparent"
        onChangeText={name => {
          setName(name);
        }}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('Secondpage', {name: name})}
      />
    </View>
  );
};

export default Firstpage;

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
