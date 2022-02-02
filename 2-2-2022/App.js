import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import {View, Image, TouchableOpacity} from 'react-native';
import CustomSidebarMenu from './pages/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.NavigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('C:/reactProject/assets/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#52aea0'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => (
          <NavigationDrawerStructure NavigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'First Page'}}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{title: 'Third Page'}}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#5f7ca0'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => (
          <NavigationDrawerStructure NavigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{title: 'Second Page'}}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{title: 'Third Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e95b63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          component={firstScreenStack}
          option={{title: 'First Page'}}
        />
        <Drawer.Screen
          name="SecondPage"
          component={secondScreenStack}
          option={{title: 'Second Page'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
