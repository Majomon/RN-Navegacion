import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../config/appTheme';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={globalStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={globalStyles.avatar}
        />
      </View>
      {/* Opciones de menú */}
      <View style={globalStyles.menuContainer}>
        <TouchableOpacity
          style={{
            ...globalStyles.menuBoton,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={20} color="black" />
          <Text style={globalStyles.menuTexto}> Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...globalStyles.menuBoton,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={20} color="black" />
          <Text style={globalStyles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
