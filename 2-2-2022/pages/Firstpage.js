import {Text, View, Button} from 'react-native';
import React from 'react';
import {styles} from '../components/Style';
import {SafeAreaView} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from './Logo';

const FirstPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Logo />,
      headerRight: () => (
        <Button onPress={() => alert('Just Dummy :))')} title="Register" />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Ionicons name="home" size={50} color="indianred" />
          <Text style={styles.textTopStyle}>This is in First Page</Text>
          <View>
            <Button
              title="Go to 2nd Page"
              onPress={() => navigation.navigate('Secondpage')}
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

export default FirstPage;
