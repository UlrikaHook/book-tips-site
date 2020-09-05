import React, { useEffect, useState } from 'react';
import css from './Category.module.css';
import Book from '../Book/Book';
import { loadData } from '../../api.js';

import FindReplaceRoundedIcon from '@material-ui/icons/FindReplaceRounded';

const Category = ({category}) => {
    
    const [books, setBooks] = useState([])

    useEffect(()=>{
        getData();
    }, [])

    const getData = async () => {
        const startIndex = Math.floor(Math.random() * 100);
        const data = await loadData(`subject:${category}`, 3, startIndex);
        setBooks(data);
    }
 

    const bookComponents = () => {
        if (books === undefined) {
            return <p>No books found!</p>
        } else {
            return books.map(book => {
                return(
                   <Book 
                    key = {book.id} 
                    book = {book}
                   />
                )
            })
        }
    }

    return (
        <div className={css.Category}>  
            <div>
                <header className="containerHeader">
                    <h3>{category.toUpperCase()}</h3>
                    <button onClick={getData} className='button'>
                        <FindReplaceRoundedIcon/>
                        <div className='buttonText'>SHOW ME NEW BOOKS</div>
                    </button>
                </header>
                <div className = 'bookContainer'>
                    {bookComponents()}
                </div>
            </div>
        </div>
    );
}

export default Category;