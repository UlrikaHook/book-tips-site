import React from 'react';
import './Book.css';

const Book = ({book}) => {
    
    //eventuellt knapp vid varje bok som lägger till som favorit

    return (
        <div className="Book">
            <div className="bookParameter">
                <p>Title</p>
                <p>Author</p>
                <p>Image</p>
                <p>Description</p>
            </div>
        </div>
    );
}

export default Book;