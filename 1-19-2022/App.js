import React from 'react';
import {View, Text, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <stack.Screen name='Home' component={HomeScreen} options={{title:'หน้าหลัก'}}/>
        <stack.Screen name='About' component={AboutScreen} options={{title:'เกี่ยวกับเรา'}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;