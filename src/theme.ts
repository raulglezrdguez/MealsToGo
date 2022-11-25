import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    // primary: string;
    // accent: string;
    // background: string;
    // card: string;
    // text: string;
    // border: string;
    // notification: string;
    // surface: string;
    // error: string;
    // onSurface: string;
    // disabled: string;
    // placeholder: string;
    // backdrop: string;
    primary: '#1f285f',
    accent: '#f0801c',
    // surface: '#1f285f',
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#1f285f',
    accent: '#f0801c',
    // surface: '#1f285f',
  },
};

export { CombinedDarkTheme, CombinedDefaultTheme };
