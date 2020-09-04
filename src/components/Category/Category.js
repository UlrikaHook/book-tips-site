import React, { useEffect, useState } from 'react';
import css from './Category.module.css';
import Book from '../Book/Book';
import { loadData } from '../../api.js';

import FindReplaceRoundedIcon from '@material-ui/icons/FindReplaceRounded';
import noImg from '../../undraw_file_searching_duff.svg';


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
    
    const bookComponents = books.map(book => {
        const bookObj = {
            id: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description, 
            image: (book.volumeInfo.imageLinks === undefined) ? noImg : book.volumeInfo.imageLinks.thumbnail
        }
       return (
           <Book 
            key = {book.id} 
            book = {bookObj}
           />
       )
    })

    //Tll Books skickas key som React-id samt book i arrayen books.
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
                    {bookComponents}
                </div>
            </div>
        </div>
    );
}

export default Category;