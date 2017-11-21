/* @flow */

import Color from 'color';
import { indigo500, indigo700, pinkA200, black, white, grey50 } from './colors';
import fonts from './fonts';

export default {
  dark: false,
  roundness: 2,
  colors: {
    primary: indigo500,
    primaryDark: indigo700,
    accent: pinkA200,
    background: grey50,
    paper: white,
    text: black,
    secondaryText: new Color(black)
      .alpha(0.7)
      .string(),
    disabled: new Color(black)
      .alpha(0.25)
      .string(),
    placeholder: new Color(black)
      .alpha(0.38)
      .string(),
  },
  fonts,
};
