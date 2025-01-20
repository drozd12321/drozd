import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import '../../App.css'
import './BookForm.css'
import { Add_Book } from '../../redux/books/actionCreators'
const BookForm = () => {
    const [title,setTitle] = useState('')
    const [author,setAuthors] = useState('')
    const dispatch = useDispatch()
    function handleSubmit(event){
        event.preventDefault()
        if(title && author){
            const book = {
                title:title,
                author:author
            }
            dispatch(Add_Book(book))
            setTitle('')
            setAuthors('')
        }
    }
  return (
    <div className='app-block book-form'>
        <h1>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text"
                id='title' 
                value={title} 
                onChange={(e)=>{setTitle(e.target.value);}}/>
            </div>
            <div >
                <label htmlFor="author">Author:</label>
                <input type="text"
                id='author' 
                value={author} 
                onChange={(e)=>setAuthors(e.target.value)}/>

            </div>
            <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default BookForm