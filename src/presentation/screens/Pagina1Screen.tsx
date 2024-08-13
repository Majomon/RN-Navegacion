import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {globalStyles} from '../../config/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina1Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <View style={{flexDirection: 'row'}}>
        {/* Navegacion con argumentos */}
        <TouchableOpacity
          style={{...globalStyles.botonGrande, backgroundColor:"#5856D6"}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Juancito',
            })
          }>
          <Text style={globalStyles.botonGrandeTexto}>Juancito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...globalStyles.botonGrande, backgroundColor:"#FF9427"}}
           onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={globalStyles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
