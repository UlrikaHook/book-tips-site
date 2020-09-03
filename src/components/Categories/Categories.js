import React from 'react';
import Category from '../Category';
import css from './Categories.module.css';

const Categories = () => {
    return (
        <div className={css.Categories}>
            <header className='introSection'>
                <h1 className='introHeader'>Book inspo by category</h1>
                <p className='introText'>Randomize books by category - the best way to find new books when you don't really know what you are looking for</p>
            </header>
            <Category category="History"/>
            <Category category="Adventure"/>
            <Category category="Science Fiction"/>
        </div>

    )
}

export default Categories;