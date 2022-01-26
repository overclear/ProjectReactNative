import {Text, View, Button} from 'react-native';
import React from 'react';
import {styles} from '../components/Style';
import {SafeAreaView} from 'react-native-safe-area-context';

const Secondpage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>This is in Second Page</Text>
          <View>
            <Button
              title="Go to 1st Page"
              onPress={() => navigation.navigate('Firstpage')}
            />
            <Button
              title="Go to 3rd Page"
              onPress={() => navigation.navigate('Thirdpage')}
            />
          </View>
          <View style={{bottom: 10, position: 'absolute'}}>
            <Text style={styles.textBottomStyle}>
              Thai-Nichi Institute of Technology
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Secondpage;