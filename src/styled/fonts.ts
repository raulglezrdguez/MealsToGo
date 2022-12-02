export type FontsType = {
  bold: string;
  italic: string;
  light: string;
  regular: string;
};
export const fonts: FontsType = {
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
  light: 'Roboto-Light',
  regular: 'Roboto-regular',
};

export type FontWeightsType = {
  regular: number;
  medium: number;
  bold: number;
};
export const fontWeights: FontWeightsType = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type FontSizesType = {
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
export const fontSizes: FontSizesType = {
  caption: '12px',
  button: '14px',
  body: '16px',
  title: '20px',
  h5: '24px',
  h4: '34px',
  h3: '45px',
  h2: '56px',
  h1: '112px',
};
