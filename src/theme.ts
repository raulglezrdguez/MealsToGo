import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

declare global {
  namespace ReactNativePaper {
    interface Theme {
      fontFamily: {
        bold: string;
        italic: string;
        light: string;
        regular: string;
      };
      fontSize: {
        caption: string;
        button: string;
        body: string;
        title: string;
        h5: string;
        h4: string;
        h3: string;
        h2: string;
        h1: string;
      };
      spacing: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
      };
    }
  }
}

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
  fontFamily: {
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    light: 'Roboto-Light',
    regular: 'Roboto-regular',
  },
  fontSize: {
    caption: '12px',
    button: '14px',
    body: '16px',
    title: '20px',
    h5: '24px',
    h4: '34px',
    h3: '45px',
    h2: '56px',
    h1: '112px',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 80,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  roundness: 2,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
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
  fontFamily: {
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    light: 'Roboto-Light',
    regular: 'Roboto-regular',
  },
  fontSize: {
    caption: '12px',
    button: '14px',
    body: '16px',
    title: '20px',
    h5: '24px',
    h4: '34px',
    h3: '45px',
    h2: '56px',
    h1: '112px',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 80,
  },
};

export { CombinedDarkTheme, CombinedDefaultTheme };
