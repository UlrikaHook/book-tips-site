import React, { useState } from 'react';
import css from './Book.module.css';
import { StylesProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { addFavorite } from '../../actions';
import { removeFavorite } from '../../actions';

const Book = ({book, books, removeFav, addFav}) => {


    const setInitialIsFavorite = ()=>{
        let initialFavorite = false;
        books.forEach((favorite) => {
            if(favorite.id === book.id){
                initialFavorite = true;
            }   
        })
        return initialFavorite;
    }

    const [showDescription, setShowDescription] = useState(false);
    const [isFavorite, setIsFavorite] = useState(setInitialIsFavorite);



    const toggleFavorite = () => {
        if(isFavorite){
            removeFav(book.id);
            setIsFavorite(false);
        } else {
            addFav(book);
            setIsFavorite(true);
        }
    }

    const toggleDescription = () => {
        setShowDescription(showDescription ? false : true)
    }

    const changeDescriptionButton = () => {
        if(showDescription){
            return(
                <>
                    <ExpandLessRoundedIcon/>
                    <div className='buttonText'>
                        CLOSE DESCRIPTION
                    </div>
                </>   
            )
        } else{
            return(
                <>
                    <ExpandMoreRoundedIcon/>
                    <div className='buttonText'>
                        SHOW DESCRIPTION
                    </div>
                </>   
            )
        }
    }

    return (
        <StylesProvider injectFirst>{
            <div className={css.Book}>
                <img src={book.image}></img>
                <p className={css.title}>{book.title}</p>
                <p className={css.subtitle}>{book.subtitle}</p>
                <p className={css.authors}>{!book.authors ? "" : book.authors[0]}</p>
                <p className={css.description}>{showDescription ? book.description : ""}</p>
                <button className='button' onClick={toggleDescription}>{changeDescriptionButton()}</button>
                <div className={css.favoriteBox}>
                    Add to Favorites
                    <FavoriteRoundedIcon onClick={toggleFavorite} className={isFavorite ? css.favorite : css.notFavorite}/>
                </div>

            </div>
        }</StylesProvider>
    );
}

const mapStateAsProps = (state) =>{
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (bookId) => {
            dispatch(removeFavorite(bookId))
        },
        addFav: (book) => {
            dispatch(addFavorite(book))
        }
    }
}

export default connect(mapStateAsProps, mapDispatchToProps)(Book);
