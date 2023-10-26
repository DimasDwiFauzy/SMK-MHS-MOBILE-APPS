import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Home from '../pages/home';
import Detail from '../pages/Detail';
import Success from '../pages/Success';

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Success" component={Success} />

    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
