import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Firstpage from './pages/Firstpage';
import Secondpage from './pages/Secondpage';
import Thirdpage from './pages/Thridpage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=>{
  const toggleDrawer = ()=>{
    props.navigationProps.toggleDrawer();
  };
  return(
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Image source={require('C:/work/Navigation/assets/drawerWhite.png')} style={{width:25,height:25, marginLeft:5}}/>
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#5f9ea0'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'Bold'},
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>
      }}>
      <Stack.Screen
        name="Firstpage"
        component={Firstpage}
        options={{title: 'First Page'}}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#5f9ea0'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'Bold'},
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>
      }}>
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
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="FirstPage" component={firstScreenStack}/>
        <Drawer.Screen name="SecondPage" component={secondScreenStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
