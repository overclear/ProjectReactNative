import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

//import Ionicons from 'react-native-vector-icons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name='Home' size={30} color='skyblue'/> */}
      <Text>Main page</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', {email:'sa.tanawut_st@gmail.com'})}
        style={{marginTop:50}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
