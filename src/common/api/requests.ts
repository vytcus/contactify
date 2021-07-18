import { AxiosRequestConfig } from 'axios';

const apiUrl = 'https://contactify-api.herokuapp.com/api';

export const getContacts = (): AxiosRequestConfig => ({
  method: 'GET',
  url: `${apiUrl}/contacts`,
});

export const getContact = (id: number): AxiosRequestConfig => ({
  method: 'GET',
  url: `${apiUrl}/contacts/${id}`,
});
