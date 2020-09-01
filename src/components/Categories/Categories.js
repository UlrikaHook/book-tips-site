import React from 'react';
import Category from '../Category';
import './Categories.css';

const Categories = () => {
    return (
        <div className="Categories">
            <Category category="History"/>
            <Category category="Adventure"/>
            <Category category="Science Fiction"/>
        </div>

    )
}

export default Categories;