import { createContext, ReactNode } from 'react';
import { getContacts } from '../../common/api/requests';
import useApi from '../../common/hooks/useApi';
import useMount from '../../common/hooks/useMount';
import { Contact, ContactsContext as ContactsContextType } from '../model';

const initialContext: ContactsContextType = { contacts: [], loading: false };

export const ContactsContext = createContext<ContactsContextType>(initialContext);

interface Props {
  children: ReactNode;
}

function ContactsProvider({ children }: Props) {
  const { loading, data, call } = useApi<Contact[]>();

  useMount(() => call(getContacts()));

  return <ContactsContext.Provider value={{ loading, contacts: data ?? [] }}>{children}</ContactsContext.Provider>;
}

export default ContactsProvider;
