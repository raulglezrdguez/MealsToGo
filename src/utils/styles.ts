import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type VariantType =
  | 'body'
  | 'button'
  | 'label'
  | 'caption'
  | 'error'
  | 'hint'
  | 'title';

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
    body: {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.body,
    },
    button: {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.button,
    },
    label: {
      fontFamily: theme.fontsFamily.bold,
      fontSize: theme.fontsSize.body,
    },
    caption: {
      fontFamily: theme.fontsFamily.regular,
      fontSize: theme.fontsSize.caption,
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
    title: {
      fontFamily: theme.fontsFamily.bold,
      fontSize: theme.fontsSize.title,
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
