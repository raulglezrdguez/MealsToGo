import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IconSearch } from '../components/IconSearch';
import { useTheme } from 'react-native-paper';

import { Search } from './Search.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  const { colors } = useTheme();

  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent,
        tabBarActiveBackgroundColor: colors.background,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Search') {
            return <IconSearch color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen name="Search" component={Search} />
    </BottomTabs.Navigator>
  );
};
