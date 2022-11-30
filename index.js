import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { App } from './src/App';
import { name as appName } from './app.json';

import {
  CombinedDarkTheme as DarkTheme,
  CombinedDefaultTheme as DefaultTheme,
} from './src/theme';
import { useThemeStore } from './src/stores/themeStore';

export default function Main() {
  const dark = useThemeStore(state => state.dark);

  const theme = dark ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
