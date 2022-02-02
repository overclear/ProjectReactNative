import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../components/Styles';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textCenterStyle}>You're on profile screen</Text>
      </View>
      <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
