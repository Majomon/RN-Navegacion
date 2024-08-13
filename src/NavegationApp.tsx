import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {MenuLateralBasico} from './presentation/navigation/MenuLateralBasico';

export const NavegationApp = () => {
  return (
    <NavigationContainer>
      <MenuLateralBasico />
      {/*   <StackNavigator /> */}
    </NavigationContainer>
  );
};
