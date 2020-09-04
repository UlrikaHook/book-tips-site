import React from 'react';
import css from './Favorites.module.css';
import { connect } from 'react-redux';
import Book from '../Book';
import noImg from '../../undraw_file_searching_duff.svg';

const Favorites = ({ books }) => {

    let bookComponents;

    if (typeof books === undefined) {
        bookComponents = <p>No books found!</p>
    } else {
        console.log(typeof books);
        bookComponents = books.map(book => {
            const bookObj = {
                id: book.id,
                title: book.title,
                subtitle: book.subtitle,
                authors: book.authors,
                description: book.description, 
                image: (book.image === undefined) ? noImg : book.image
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
        <div className={css.Favorites}>
            <div className='introSection'>
                <h1 className='introHeader'>My saved favorite books</h1>
                <p className="introText">Here is all your favorite marked books</p>
            </div>
            <div className = 'bookContainer'>{bookComponents}</div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps,null)(Favorites)