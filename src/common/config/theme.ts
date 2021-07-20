import { createTheme } from '@material-ui/core';
import { teal, blueGrey } from '@material-ui/core/colors';

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
    MuiTableHead: {
      root: {
        backgroundColor: teal[300],
      },
    },
    MuiTableRow: {
      root: {
        '&.Mui-selected': {
          backgroundColor: blueGrey[100],
        },
        '&.Mui-selected:hover': {
          backgroundColor: blueGrey[100],
        },
      },
    },
  },
});
