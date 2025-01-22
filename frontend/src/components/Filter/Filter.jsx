import React from 'react'
import { setTitleFilter,selectFilterTitle } from '../../redux/filter/filterSlice'
import { useDispatch, useSelector } from 'react-redux' 
import styles from './filter.module.css'
const Filter = () => {
  const dispath = useDispatch();
  const handleFilterTitle = (e) =>{
    dispath(setTitleFilter(e.target.value))
  }
  const stateTitle = useSelector(selectFilterTitle)
  return (
    <div className='app-block'>
        <div className='filter-group'>
          <input 
          className={styles.inp} 
          type="text" 
          placeholder='Filter by title ...' 
          value={stateTitle}
          onChange={handleFilterTitle} />
        </div>
    </div>
  )
}

export default Filter