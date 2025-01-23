import React from 'react';
import {
  setTitleFilter,
  selectFilterTitle,
  setResetFilters,
  selectFilterAuthor,
  setAuthorFilter,
  setFavorites,
  selectFavorites
} from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkStar,BsBookmarkStarFill } from 'react-icons/bs';
import styles from './filter.module.css';
const Filter = () => {
  const dispath = useDispatch();
  const handleFilterTitle = (e) => {
    dispath(setTitleFilter(e.target.value));
  };
  const handleFilterAuthor = (e) => {
    dispath(setAuthorFilter(e.target.value));
  };
  const stateTitle = useSelector(selectFilterTitle);
  const stateAuthor = useSelector(selectFilterAuthor);
  const stateFavorites = useSelector(selectFavorites);
  const FilterReset = () => {
    dispath(setResetFilters());
  };
  const handleBookFavorites = () => {
    dispath(setFavorites());
  }
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
          value={stateAuthor}
          onChange={handleFilterAuthor}
        />
        {stateFavorites ? (<BsBookmarkStarFill className={`
          ${styles.icon} ${styles.favor}`} onClick={handleBookFavorites}/>) : <BsBookmarkStar className={styles.icon} onClick={handleBookFavorites}/>}
        <button className={styles.btn} onClick={FilterReset}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
