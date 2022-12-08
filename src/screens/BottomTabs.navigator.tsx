import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';

import { Restaurants } from '../features/restaurants/screens/Restaurants.screen';
import { useDarkStore } from '../stores/darkStore';
import { IconRestaurant } from '../components/icons';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  const { colors } = useTheme();

  const changeDark = useDarkStore(state => state.changeDark);
  const dark = useDarkStore(state => state.dark);

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
          if (route.name === 'Restaurants') {
            return <IconRestaurant color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen name="Restaurants" component={Restaurants} />
    </BottomTabs.Navigator>
  );
};
