import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME) => {

  const primarycolor:any = process.env.REACT_APP_PRIMARY_COLOR;
  const secondaryColor:any = process.env.REACT_APP_SECONDARY_COLOR;
  if(mode === LIGHT_MODE_THEME){
    let theme = createTheme({
      palette: {
        mode,
        primary: {
          main: primarycolor
        },
        secondary: {
          main: secondaryColor
        }
      },
      typography: {
        fontFamily: 'Times New Roman',
        fontSize: 15,
        h1: {
          // incase
          fontFamily: 'Roboto',
          fontSize: 15
        }
      },
      shape: {
        borderRadius: 20
      },
    });
    theme = responsiveFontSizes(theme);
    return theme;
  }

  if(mode === DARK_MODE_THEME) {
    let theme = createTheme({
      palette: {
        mode,
        primary: {
          main: primarycolor
        },
        secondary: {
          main: secondaryColor
        }
      },
      typography: {
        fontFamily: 'Times New Roman',
        fontSize: 15,
        h1: {
          // incase
          fontFamily: 'Roboto',
          fontSize: 15
        }
      },
      shape: {
        borderRadius: 20
      },
    });
    theme = responsiveFontSizes(theme);
    return theme;
  }
};
