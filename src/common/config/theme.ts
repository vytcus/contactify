import { createTheme } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      main: teal[300],
    },
    text: {
      secondary: 'white',
    },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        color: 'white',
        '& .MuiIconButton-label': {
          position: 'relative',
          zIndex: 0,
        },
        '&$checked .MuiIconButton-label:after': {
          content: '""',
          left: 4,
          top: 4,
          height: 15,
          width: 15,
          position: 'absolute',
          backgroundColor: 'white',
          zIndex: -1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: 'white',
      },
    },
    MuiFormControlLabel: {
      label: {
        color: 'white',
      },
    },
    MuiInput: {
      underline: {
        '&::before': {
          borderBottomColor: 'white',
        },
      },
    },
    MuiSelect: {
      icon: {
        color: 'white',
      },
    },
    MuiTableContainer: {
      root: {
        '&.MuiPaper-rounded': {
          borderRadius: '0px 0px 4px 4px',
        },
      },
    },
    MuiTableHead: {
      root: {
        backgroundColor: teal[300],
      },
    },
  },
});
