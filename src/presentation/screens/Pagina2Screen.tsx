import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../config/appTheme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export const Pagina2Screen = () => {
  const navigator = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
    });
  }, []);

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina2Screen</Text>

      <Button
        title="Ir a la pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
