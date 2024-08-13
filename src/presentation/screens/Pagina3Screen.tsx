import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {globalStyles} from '../../config/appTheme';

interface Props extends StackScreenProps<RootStackParams> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text>Pagina3Screen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />

      {/* popToPop - Destruye todo el stack */}
      <Button title="Ir a la pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
