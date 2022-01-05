import React from 'react';
import {View, Text, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstpage from './screens/Firstpage';
import Secondpage from './screens/Secondpage';

const stack = createNativeStackNavigator();

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
        <stack.Screen name='Firstpage' component={Firstpage} options={{title:'First page'}}/>
        <stack.Screen name='Secondpage' component={Secondpage} options={{title:'Second page'}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;