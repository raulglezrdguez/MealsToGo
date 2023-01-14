import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
  fontsFamily,
  FontsFamilyType,
  fontsSize,
  FontsSizeType,
} from './fonts';
import { spacing, SpacingType } from './spacing';

declare global {
  namespace ReactNativePaper {
    interface Theme {
      fontsFamily: FontsFamilyType;
      fontsSize: FontsSizeType;
      spacing: SpacingType;
    }
  }
}

const communTheme = {
  fontsFamily,
  fontsSize,
  spacing,
};

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
  },
  ...communTheme,
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
  },
  ...communTheme,
};

export { CombinedDarkTheme, CombinedDefaultTheme };
