import React from 'react';
import {View, Text, Button} from 'react-native'
import Footer from './component/Footer';
import Logo from './component/Logo';
import AlertExample from './component/AlertExample';
import ModalExample from './component/ModalExample';

const App = () => {
  const showData = () => {
    alert('HelloWorld')
  }
  return (
    <ModalExample/>
  );
};

export default App;