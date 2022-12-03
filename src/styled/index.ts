import * as styledComponents from 'styled-components/native';

import {
  fonts,
  fontSizes,
  FontSizesType,
  FontsType,
  // fontWeights,
  // FontWeightsType,
} from './fonts';
import { spacing, SpacingType } from './spacing';

type StyledThemeType = {
  fonts: FontsType;
  fontSizes: FontSizesType;
  // fontWeights: FontWeightsType;
  spacing: SpacingType;
};
export const StyledTheme: StyledThemeType = {
  fonts,
  fontSizes,
  // fontWeights,
  spacing,
};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<StyledThemeType>;

export { css, ThemeProvider };
export default styled;
