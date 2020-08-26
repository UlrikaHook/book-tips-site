import React from 'react';
import './Category.css';
import Book from '../Book/Book';


const Category = () => {
    return (
        <div className="Category">
            <h3>Category</h3>
            <Book />
            <Book />
            <Book />
        </div>
    );
}

export default Category;