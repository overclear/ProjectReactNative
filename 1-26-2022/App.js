import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Firstpage from './pages/Firstpage';
import Secondpage from './pages/Secondpage';
import Thirdpage from './pages/Thridpage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {backgroundColor: '#5f9ea0'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'Bold'},
        }}>
        <Stack.Screen
          name="Firstpage"
          component={Firstpage}
          options={{title: 'First Page'}}
        />
        <Stack.Screen
          name="Secondpage"
          component={Secondpage}
          options={{title: 'Second Page'}}
        />
        <Stack.Screen
          name="Thirdpage"
          component={Thirdpage}
          options={{title: 'Third Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
