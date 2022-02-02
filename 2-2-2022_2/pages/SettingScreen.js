import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../components/Styles';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textCenterStyle}>Setting Screen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonTextStyle}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text style={styles.buttonTextStyle}>Open News Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text style={styles.buttonTextStyle}>Open Profile Screen</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
