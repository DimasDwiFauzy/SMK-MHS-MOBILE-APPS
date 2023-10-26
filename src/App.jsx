import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Router from './Router';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './pages/Detail';
import Success from './pages/Success';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     
      <Router/>
    
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Success" component={Success} />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
