import ReactDOM from 'react-dom';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { theme } from './common/config/theme';
import Contacts from './contacts/Contacts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" height="100vh" bgcolor={blue[700]} display="flex" alignItems="center">
        <Contacts />
      </Box>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
