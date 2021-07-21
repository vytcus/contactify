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

export type Order = 'asc' | 'desc';

export interface ColumnShowHideOption {
  key: keyof Contact;
  label: string;
}
