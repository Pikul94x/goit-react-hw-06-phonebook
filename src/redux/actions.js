import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/Add', (name, number) => ({
  payload: {
    id: nanoid(5),
    name,
    number,
  },
}));
export const deleteContact = createAction('contact/delete');
export const changeFilter = createAction('filter/change');
