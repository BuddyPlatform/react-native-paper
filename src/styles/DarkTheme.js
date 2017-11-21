/* @flow */

import Color from 'color';
import DefaultTheme from './DefaultTheme';
import { white, grey800, cyan500, cyan700 } from './colors';
import type { Theme } from '../types';

const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: cyan500,
    primaryDark: cyan700,
    background: '#303030',
    paper: grey800,
    text: white,
    secondaryText: new Color(white)
      .alpha(0.7)
      .string(),
    disabled: new Color(white)
      .alpha(0.5)
      .string(),
    placeholder: new Color(white)
      .alpha(0.38)
      .string(),
  },
};

export default DarkTheme;
