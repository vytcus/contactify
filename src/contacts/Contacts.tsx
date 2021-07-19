import { Box, makeStyles } from '@material-ui/core';
import ContactsTable from './components/ContactsTable';
import ContactsTableFilters from './components/ContactsTableFilters';
import ContactsProvider from './providers/ContactsProvider';

const useStyles = makeStyles(() => ({}));

function Contacts() {
  const {} = useStyles();

  return (
    <ContactsProvider>
      <Box maxWidth={1200} margin="auto" flex={1}>
        <ContactsTableFilters />
        <ContactsTable />
      </Box>
    </ContactsProvider>
  );
}

export default Contacts;
