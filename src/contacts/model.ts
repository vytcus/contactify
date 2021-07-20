export interface Contact {
  id: string;
  name: string;
  surname: string;
  city: string;
  email: string;
  phone: string;
  isActive: boolean;
}

export interface ContactsFilter {
  name: string;
  city: string;
  active: boolean;
}
