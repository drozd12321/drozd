import React from 'react';
import {
  setTitleFilter,
  selectFilterTitle,
  setResetFilters,
} from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './filter.module.css';
const Filter = () => {
  const dispath = useDispatch();
  const handleFilterTitle = (e) => {
    dispath(setTitleFilter(e.target.value));
  };
  const stateTitle = useSelector(selectFilterTitle);
  const FilterReset = () => {
    dispath(setResetFilters());
  };
  return (
    <div className="app-block">
      <div className={styles.filterGroup}>
        <input
          className={styles.inp}
          type="text"
          placeholder="Filter by title ..."
          value={stateTitle}
          onChange={handleFilterTitle}
        />
        <input
          className={styles.inp}
          type="text"
          placeholder="Filter by author ..."
        />
        <button className={styles.btn} onClick={FilterReset}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
