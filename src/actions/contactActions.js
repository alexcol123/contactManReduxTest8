import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
};
