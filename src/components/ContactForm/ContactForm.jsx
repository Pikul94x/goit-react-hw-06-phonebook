import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    contacts.find(cont => cont.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        value={name}
        type="text"
        name="name"
        id="name"
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.currentTarget.value)}
        className={styles.input}
      />
      <br />
      <label className={styles.label} htmlFor="tel">
        Number
      </label>
      <input
        value={number}
        type="tel"
        name="number"
        id="tel"
        placeholder="Enter Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.currentTarget.value)}
        className={styles.input}
      />
      <br />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
