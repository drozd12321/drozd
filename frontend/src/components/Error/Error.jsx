import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectError, setClearError } from '../../redux/filter/errorSlice';
import { ToastContainer, toast } from 'react-toastify';
import styles from './error.module.css'
const Error = () => {
  const stateError = useSelector(selectError);
  console.log(stateError);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(stateError){
      toast.error({stateError});
      dispatch(setClearError);
    }
  },[stateError,dispatch])
  return (
    <ToastContainer position='top-right' autoClose={2000}/>
  )
}

export default Error