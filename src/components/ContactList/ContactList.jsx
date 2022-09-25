import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));
  function renderContactList() {
    const filterLowered = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(cont =>
        cont.name.toLowerCase().includes(filterLowered)
      );
    }
    return;
  }
  const visibleContacts = renderContactList();
  return (
    <ul>
      {visibleContacts.map(item => (
        <li className={styles.list} key={item.id}>
          {item.name}: {item.number}
          <button
            type="button"
            className={styles.button}
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
