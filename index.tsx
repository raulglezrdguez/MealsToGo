import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { App } from './src/App';
import { name as appName } from './app.json';
import { StyledTheme, ThemeProvider } from './src/theme/styled';

import {
  CombinedDarkTheme as DarkTheme,
  CombinedDefaultTheme as DefaultTheme,
} from './src/theme';
import { useDarkStore } from './src/stores/darkStore';
// import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { useRestaurantsStore } from './src/stores/restaurantsStore';

export default function Main() {
  const dark = useDarkStore(state => state.dark);
  const fetchRestaurants = useRestaurantsStore(state => state.fetchRestaurants);

  useEffect(() => {
    fetchRestaurants('37.7749295,-122.4194155');
  }, [fetchRestaurants]);

  const theme = dark ? DarkTheme : DefaultTheme;

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <ThemeProvider theme={StyledTheme}>
        <PaperProvider theme={theme}>
          {/* <RestaurantContextProvider> */}
          <NavigationContainer theme={theme}>
            <App />
          </NavigationContainer>
          {/* </RestaurantContextProvider> */}
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 },
});
