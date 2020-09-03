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
    /*const load = async () => {
        const apiKey = "AIzaSyBvJcFRNsQK5A31KFrcu6oX5FHZP9iQ-go";
        const startIndex = Math.floor(Math.random() * 100);
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${startIndex}&printType=books&maxResults=3&fields=items&key=${apiKey}`

        const response = await fetch(url);
        const jsonResponse = await response.json()
        console.log(jsonResponse.items)
        setBooks(jsonResponse.items)
    }*/
    
    const bookComponents = books.map(book => {
       return (
           <Book 
            key = {book.id} 
            title = {book.volumeInfo.title} 
            subtitle = {book.volumeInfo.subtitle} 
            authors = {book.volumeInfo.authors} 
            description = {book.volumeInfo.description} 
            image = {(book.volumeInfo.imageLinks === undefined) ? noImg : book.volumeInfo.imageLinks.thumbnail}
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