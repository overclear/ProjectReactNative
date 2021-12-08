import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const TouchablePractice = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressCheck = () => {
    if (!email.trim() || !password.trim()) {
      !email.trim()
        ? alert('Please Enter Your Email')
        : alert('Please Enter Your Password');
    } else {
      alert('Email : ' + email + '\n' + 'Password : ' + password);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.sectionStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={email => setEmail(email)}></TextInput>
        </View>
        <View style={styles.sectionStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Password"
            underlineColorAndroid="transparent"
            onChangeText={password => setPassword(password)}></TextInput>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Button onPress={onPressCheck} title="SUBMIT" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
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
