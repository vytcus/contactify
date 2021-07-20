import { useMemo, useState } from 'react';
import { getContacts } from '../../common/api/requests';
import useApi from '../../common/hooks/useApi';
import useMount from '../../common/hooks/useMount';
import { Contact, ContactsFilter } from '../model';

function useContacts() {
  const { loading, data, call } = useApi<Contact[]>();
  const [filter, setFilter] = useState<ContactsFilter | null>(null);

  useMount(() => call(getContacts()));

  function onApplyFilter(filter: ContactsFilter) {
    setFilter(filter);
  }

  function filterContacts() {
    if (!data) {
      return [];
    }
    if (!filter) {
      return data;
    }

    let filteredContacts = data;

    if (filter.name) {
      filteredContacts = filteredContacts.filter((x) => x.name.toLowerCase().includes(filter.name.toLowerCase()));
    }

    if (filter.city) {
      filteredContacts = filteredContacts.filter((x) => x.city === filter.city);
    }

    if (filter.active) {
      filteredContacts = filteredContacts.filter((x) => x.isActive === filter.active);
    }

    return filteredContacts;
  }

  function getContactCities() {
    if (!data) {
      return [];
    }

    return data.map((x) => x.city);
  }

  const contacts = useMemo(filterContacts, [data, filter]);
  const cities = useMemo(getContactCities, [data]);

  return {
    contacts,
    cities,
    loading,
    onApplyFilter,
  };
}

export default useContacts;
