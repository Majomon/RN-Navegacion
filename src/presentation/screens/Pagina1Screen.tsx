import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {colors, globalStyles} from '../../config/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<RootStackParams> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={35} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

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
          style={{...globalStyles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Juancito',
            })
          }>
          <Icon name="accessibility-outline" size={35} color="white" />

          <Text style={globalStyles.botonGrandeTexto}>Juancito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...globalStyles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={35} color="white" />
          <Text style={globalStyles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
