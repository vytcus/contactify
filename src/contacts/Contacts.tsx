import { makeStyles, Paper } from '@material-ui/core';
import ContactsTable from './components/ContactsTable';
import ContactsTableFilters from './components/ContactsTableFilters';
import useContacts from './hooks/useContacts';

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
  const { contacts, cities, loading, onApplyFilter } = useContacts();

  return (
    <Paper className={paper} elevation={0}>
      <ContactsTableFilters cities={cities} onApplyFilter={onApplyFilter} />
      <ContactsTable contacts={contacts} loading={loading} />
    </Paper>
  );
}

export default Contacts;
