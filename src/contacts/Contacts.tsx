import { makeStyles, Paper } from '@material-ui/core';
import ContactsTable from './components/ContactsTable';
import ContactsTableFilters from './components/ContactsTableFilters';
import ContactsProvider from './providers/ContactsProvider';

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: 1200,
    margin: 'auto',
    flex: 1,
    overflow: 'hidden',
    borderRadius: '10px 0px 10px 10px',
  },
}));

function Contacts() {
  const { paper } = useStyles();

  return (
    <ContactsProvider>
      <Paper className={paper} elevation={0}>
        <ContactsTableFilters />
        <ContactsTable />
      </Paper>
    </ContactsProvider>
  );
}

export default Contacts;
