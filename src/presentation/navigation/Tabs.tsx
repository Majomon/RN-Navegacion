import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import {colors} from '../../config/appTheme';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'TopTabNavigator':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'TopTabNavigator':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIos.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIos.Screen
        name="TopTabNavigator"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <BottomTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIos.Navigator>
  );
};

{
  /*      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */
}
