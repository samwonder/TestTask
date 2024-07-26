import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedScreen from '../screens/FeedScreen';
import {Image} from 'react-native';

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Feed') {
            iconName = 'feed';
          }

          return (
            <Image
              source={{uri: iconName}}
              style={{width: size, height: size, tintColor: color}}
            />
          );
        },
      })}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
