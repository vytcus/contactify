import { useEffect } from 'react';
import { getContact } from '../../common/api/requests';
import useApi from '../../common/hooks/useApi';
import { Contact } from '../model';

function useContactCard(contactId: string) {
  const { data, loading, call } = useApi<Contact>();

  useEffect(() => {
    call(getContact(contactId));
  }, [contactId]);

  return {
    contact: data,
    loading,
  };
}

export default useContactCard;
