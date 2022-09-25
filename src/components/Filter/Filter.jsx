import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const onChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <div className={styles.section}>
      <label htmlFor="filter">
        <h2 className={styles.title}>Find contact by name</h2>
        <input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={onChange}
          className={styles.input}
          placeholder="Find name"
        />
      </label>
    </div>
  );
};

export default Filter;
