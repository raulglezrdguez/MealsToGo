import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IconButton } from 'react-native-paper';

import { RestaurantsStackNavigator } from './Restaurants.navigator';
import { useDarkStore } from '../stores/darkStore';
import { Map } from '../features/map/screens/Map.screen';
import { Settings } from '../features/settings/screens/Settings.screen';
import { BottomTabBar } from '../components/BottomTabBar';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  const changeDark = useDarkStore(state => state.changeDark);
  const dark = useDarkStore(state => state.dark);

  return (
    <BottomTabs.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={({}) => ({
        headerRight: () => (
          <IconButton
            testID="changeDark"
            icon={dark ? 'weather-night' : 'weather-sunny'}
            onPress={changeDark}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RestaurantsStackNavigator"
        component={RestaurantsStackNavigator}
      />
      <BottomTabs.Screen name="Map" component={Map} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
};
