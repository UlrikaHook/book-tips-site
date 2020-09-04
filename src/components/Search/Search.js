import React, { useState } from 'react';
import css from './Search.module.css';

import { loadData } from '../../api.js';
import Book from '../Book/Book';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import noImg from '../../undraw_file_searching_duff.svg';

const Search = () => {

    const [books, setBooks] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [authorInput, setAuthorInput] = useState("");

    const getData = async () => {
        const data = await loadData(`inauthor:${authorInput}+intitle:${titleInput}`, 9, 0);
        setBooks(data);
    }

    const changeAuthor = (event) => {
        setAuthorInput(event.target.value);
    }

    const changeTitle = (event) => {
        setTitleInput(event.target.value);
    }

    let bookComponents;

    if (typeof books === 'undefined') {
        bookComponents = 
            <p>No books found!</p>
    } else {
        bookComponents = books.map(book => {
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
    }

    return(
        <div className={css.Search}>            
                    <header className='introSection'>
                        <h1 className='introHeader'>Search for books</h1>
                        <p className='introText'>Type in what ever you want, and voila, book inspo coming up!</p>
                    </header>
                    <div className={css.searchBox}>
                        <input type="text" placeholder="Author..." onChange={changeAuthor}></input>
                        <input type="text" placeholder="Title..." onChange={changeTitle}></input>
                        <button className='button' onClick={getData} disabled={titleInput.length<2 && authorInput.length<2 ? true : false}>
                            <SearchRoundedIcon/>
                            <div className='buttonText'>SEARCH</div>
                        </button> 
                    </div>
                    <div className='bookContainer'>
                        {bookComponents}
                    </div>
         </div>
    )
}

export default Search;