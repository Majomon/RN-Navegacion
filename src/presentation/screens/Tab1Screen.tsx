import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../config/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen mounted');
  }, []);

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Iconos</Text>

      <Icon name="airplane-outline" size={50} color={'#900'} />
    </View>
  );
};
