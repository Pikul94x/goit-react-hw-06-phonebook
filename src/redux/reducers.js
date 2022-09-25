import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

function initialState() {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (parsedContacts) {
    return parsedContacts;
  }
  return [];
}

const items = createReducer(initialState(), {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
export const rootReducer = combineReducers({
  items,
  filter,
});
