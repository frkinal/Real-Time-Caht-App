import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../../Screens/ChatScreen';
import Settings from '../../Screens/Settings';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Colors/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      headerShown={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'ChatScreen') {
            iconName = focused
              ? 'ios-chatbubbles-sharp'
              : 'ios-chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.darkgreen,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
