import ReactDOM from 'react-dom';
import React from 'react';
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import { theme } from './common/config/theme';
import Contacts from './contacts/Contacts';

function App() {
  return <ThemeProvider theme={theme}><Contacts /></ThemeProvider>
}

ReactDOM.render(<App />, document.getElementById('app'));