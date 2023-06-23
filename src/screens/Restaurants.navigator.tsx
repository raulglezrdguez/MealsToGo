import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Restaurants } from '../features/restaurants/screens/Restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsStackNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="Restaurants" component={Restaurants} />
    </RestaurantStack.Navigator>
  );
};
