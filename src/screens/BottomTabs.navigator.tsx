import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IconSearch } from '../components/IconSearch';
import { IconButton, useTheme } from 'react-native-paper';

import { Search } from './Search.screen';
import { useThemeStore } from '../stores/themeStore';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  const { colors } = useTheme();

  const changeDark = useThemeStore(state => state.changeDark);
  const dark = useThemeStore(state => state.dark);

  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => (
          <IconButton
            icon={dark ? 'weather-night' : 'weather-sunny'}
            onPress={changeDark}
          />
        ),
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
