import { createSelector } from '@reduxjs/toolkit';

export const fetchContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;
export const getIsloading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [fetchContacts, getFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
