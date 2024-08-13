import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../config/appTheme';

export const SettingsScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...globalStyles.globalMargin, marginTop: top + 20}}>
      <Text style={globalStyles.title}>SettingsScreen</Text>
    </View>
  );
};
