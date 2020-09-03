import React from 'react';
import css from './Search.module.css';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const Search = () => {
    return(
        <div className={css.Search}>            
                    <header className='introSection'>
                        <h1 className='introHeader'>Search for books</h1>
                        <p className='introText'>Type in what ever you want, and voila, book inspo coming up!</p>
                    </header>
                    <div className={css.searchBox}>
                        <input type="text"></input>
                        <button className='button'>
                            <SearchRoundedIcon/>
                            <div className='buttonText'>SEARCH</div>
                        </button> 
                    </div>
         </div>
    )
}

export default Search;