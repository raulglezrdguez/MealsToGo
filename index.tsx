import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { App } from './src/App';
import { name as appName } from './app.json';
import { StyledTheme, ThemeProvider } from './src/styled';

import {
  CombinedDarkTheme as DarkTheme,
  CombinedDefaultTheme as DefaultTheme,
} from './src/theme';
import { useThemeStore } from './src/stores/themeStore';

export default function Main() {
  const dark = useThemeStore(state => state.dark);

  const theme = dark ? DarkTheme : DefaultTheme;

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <ThemeProvider theme={StyledTheme}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <App />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 },
});
