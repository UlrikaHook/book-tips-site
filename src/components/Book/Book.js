import React from 'react';
import './Book.css';

const Book = ({title, subtitle, authors, description, image}) => {
    
    //eventuellt knapp vid varje bok som lägger till som favorit

    return (
        <div className="Book">
            <div className="bookParameter">
                <img src={image}></img>
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
                <p className="authors">{authors}</p>
                <p className="description">Description</p>
                <p>V</p>
            </div>
        </div>
    );
}

export default Book;