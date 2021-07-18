export interface Contact {
  id: string;
  name: string;
  surname: string;
  city: string;
  email: string;
  phone: string;
  isActive: boolean;
}

export interface ContactsContext {
  contacts: Contact[];
  loading: boolean;
}
