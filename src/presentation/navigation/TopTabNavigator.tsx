import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../config/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'CH';
              break;

            case 'Contacts':
              iconName = 'CO';
              break;
            case 'Albums':
              iconName = 'AL';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
