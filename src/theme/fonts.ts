export type FontsFamilyType = {
  bold: string;
  italic: string;
  light: string;
  regular: string;
};
export const fontsFamily: FontsFamilyType = {
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
  light: 'Roboto-Light',
  regular: 'Roboto-regular',
};

export type FontsWeightType = {
  regular: number;
  medium: number;
  bold: number;
};
export const fontsWeight: FontsWeightType = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type FontsSizeType = {
  caption: number;
  button: number;
  body: number;
  title: number;
  h5: number;
  h4: number;
  h3: number;
  h2: number;
  h1: number;
};
export const fontsSize: FontsSizeType = {
  caption: 12,
  button: 14,
  body: 16,
  title: 20,
  h5: 24,
  h4: 34,
  h3: 45,
  h2: 56,
  h1: 75,
};
