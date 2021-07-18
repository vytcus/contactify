import ContactsTable from './components/ContactsTable';
import ContactsTableFilters from './components/ContactsTableFilters';
import ContactsProvider from './providers/ContactsProvider';

function Contacts() {
  return (
    <ContactsProvider>
      <ContactsTableFilters />
      <ContactsTable />
    </ContactsProvider>
  );
}

export default Contacts;
