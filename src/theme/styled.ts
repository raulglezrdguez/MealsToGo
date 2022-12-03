import * as styledComponents from 'styled-components/native';

import {
  fontsFamily,
  FontsFamilyType,
  fontsSize,
  FontsSizeType,
} from './fonts';
import { spacing, SpacingType } from './spacing';

type StyledThemeType = {
  fontsFamily: FontsFamilyType;
  fontsSize: FontsSizeType;
  spacing: SpacingType;
};
export const StyledTheme: StyledThemeType = {
  fontsFamily,
  fontsSize,
  spacing,
};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<StyledThemeType>;

export { css, ThemeProvider };
export default styled;
