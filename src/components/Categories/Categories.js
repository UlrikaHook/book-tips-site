import React from 'react';
import Category from '../Category';
import css from './Categories.module.css';

const Categories = () => {
    return (
        <div className={css.Categories}>
            <header className='introSection'>
                <h1 className='introHeader'>Book inspo by category</h1>
                <p className='introText'>Randomize books by category - the best way to find new book inspiration</p>
            </header>
            <Category category="Drama"/>
            <Category category="History"/>
            <Category category="Thriller"/>
            <Category category="Fantasy"/>
            <Category category="Love"/>
        </div>

    )
}

export default Categories;