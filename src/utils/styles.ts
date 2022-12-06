import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type VariantType =
  | 'caption'
  | 'button'
  | 'body'
  | 'title'
  | 'label'
  | 'error'
  | 'hint';

const defaultTextStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.flatten([
    {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.caption,
      flexWrap: 'wrap',
      marginTop: 0,
      marginBottom: 0,
    },
  ]);

const typography = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    caption: {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.caption,
    },
    button: {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.button,
    },
    body: {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.body,
    },
    title: {
      fontFamily: theme.fontsFamily.bold,
      fontSize: theme.fontsSize.title,
    },
    label: {
      fontFamily: theme.fontsFamily.bold,
      fontSize: theme.fontsSize.body,
    },
    error: {
      fontFamily: theme.fontsFamily.bold,
      fontSize: theme.fontsSize.caption,
      color: theme.colors.error,
    },
    hint: {
      fontFamily: theme.fontsFamily.italic,
      fontSize: theme.fontsSize.caption,
    },
  });

export const textStyle = (
  variant: VariantType,
  theme: ReactNativePaper.Theme,
) =>
  StyleSheet.compose(
    defaultTextStyles(theme),
    typography(theme)[variant],
  ) as StyleProp<TextStyle>;
