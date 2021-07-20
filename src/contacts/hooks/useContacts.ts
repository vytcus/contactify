import { getContacts } from '../../common/api/requests';
import useApi from '../../common/hooks/useApi';
import useMount from '../../common/hooks/useMount';
import { Contact } from '../model';

function useContacts() {
  const { loading, data, call } = useApi<Contact[]>();

  useMount(() => call(getContacts()));

  return {
    contacts: data ?? [],
    loading,
  };
}

export default useContacts;
