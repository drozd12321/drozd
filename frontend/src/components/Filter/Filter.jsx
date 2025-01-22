import React from 'react'
import { setTitleFilter } from '../../redux/filter/filterSlice'
import { useDispatch } from 'react-redux'
import styles from './filter.module.css'
const Filter = () => {
  const dispath = useDispatch();
  const handleFilterTitle = (e) =>{
    dispath(setTitleFilter(e.target.value))
  }
  return (
    <div className='app-block'>
        <div className='filter-group'>
          <input 
          className={styles.inp} 
          type="text" 
          placeholder='Filter by title ...' 
          onChange={handleFilterTitle} />
        </div>
    </div>
  )
}

export default Filter