import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
//import {StackNavigator} from './presentation/navigation/StackNavigator';
//import {MenuLateralBasico} from './presentation/navigation/MenuLateralBasico';
import {MenuLateral} from './presentation/navigation/MenuLateral';
import {Tabs} from './presentation/navigation/Tabs';

export const NavegationApp = () => {
  return (
    <NavigationContainer>
      {/*       <MenuLateralBasico /> */}
      {/*   <StackNavigator /> */}
      <MenuLateral />
      {/*  <Tabs /> */}
    </NavigationContainer>
  );
};
