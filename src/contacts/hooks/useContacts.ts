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
      filteredContacts = filteredContacts.filter((x) => x.city.toLowerCase().includes(filter.city.toLowerCase()));
    }

    if (filter.active) {
      filteredContacts = filteredContacts.filter((x) => x.isActive === filter.active);
    }

    return filteredContacts;
  }

  const contacts = useMemo(filterContacts, [data, filter]);

  return {
    contacts,
    loading,
    onApplyFilter,
  };
}

export default useContacts;
