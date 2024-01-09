import { DefaultTheme } from 'styled-components';

export const styledOptions = {
  colors: {
    Black: '#222222',
    White: '#FFFFFF',
    Red: '#CF0F0F',
  },
  fonts: {},
} as const;

const theme: DefaultTheme = { ...styledOptions };

export default theme;
