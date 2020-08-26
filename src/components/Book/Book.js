import React from 'react';
import './Book.css';

const Book = () => {
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