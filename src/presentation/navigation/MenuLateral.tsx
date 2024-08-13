import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {globalStyles} from '../../config/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
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
        <TouchableOpacity style={globalStyles.menuBoton}
        
        onPress={()=>navigation.navigate("StackNavigator")}
        >
          <Text style={globalStyles.menuTexto}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.menuBoton}
        
        onPress={()=>navigation.navigate("SettingsScreen")}
        >
          <Text style={globalStyles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
