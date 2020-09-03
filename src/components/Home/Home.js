import React from 'react';
import css from './Home.module.css';

const Home = () => {
    return(
        <div className={`${css.Home} introSection`} >
            <h1>What is your next book experience?</h1>
            <p>This is the ultimate book inspiration site, in order for you to always have a book to long for</p>
            <p>You can get randomized suggestions based on category or search for books yourself</p>
        </div>
    )
}

export default Home;