import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../config/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name
    });
  }, []);

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>
        {JSON.stringify(route.params, null, 2)}
      </Text>
    </View>
  );
};
