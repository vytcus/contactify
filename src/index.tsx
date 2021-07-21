import ReactDOM from 'react-dom';
import { Box } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { theme } from './common/config/theme';
import Contacts from './contacts/Contacts';

function App() {
  const { spacing } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box component="main" height={`calc(100vh - ${spacing(10)}px)`} padding={5} bgcolor={blue[700]} display="flex" justifyContent="center" alignItems="baseline">
        <Contacts />
      </Box>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
