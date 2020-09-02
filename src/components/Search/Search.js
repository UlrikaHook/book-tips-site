import React from 'react';
import css from './Search.module.css';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const Search = () => {
    return(
        <div className={css.Search}>            
                    <header>
                        <h1>Search for books</h1>
                        <p>Type in what ever you want, and voila, book inspo coming up!</p>
                    </header>
                    <div className={css.searchBox}>
                        <input type="text"></input>
                        <button className={css.searchButton}>
                            <SearchRoundedIcon/>
                            <div className={css.searchText}>SEARCH</div>
                            </button> 
                    </div>
         </div>
    )
}

export default Search;