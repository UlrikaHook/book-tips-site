import React, { useState } from 'react';
import css from './Book.module.css';

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

const Book = ({title, subtitle, authors, description, image}) => {
    
    //eventuellt knapp vid varje bok som lägger till som favorit

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(showDescription ? false : true)
    }

    const changeDescriptionButton = () => {
        if(showDescription){
            return(
                <>
                    <ExpandLessRoundedIcon/>
                    <div className='buttonText'>
                        CLOSE DESCRIPTION
                    </div>
                </>   
            )
        } else{
            return(
                <>
                    <ExpandMoreRoundedIcon/>
                    <div className='buttonText'>
                        SHOW DESCRIPTION
                    </div>
                </>   
            )
        }
    }

    return (
        <div className={css.Book}>
            <img src={image}></img>
            <p className={css.title}>{title}</p>
            <p className={css.subtitle}>{subtitle}</p>
            <p className={css.authors}>{!authors ? "" : authors[0]}</p>
            <p className={css.description}>{showDescription ? description : ""}</p>
            <button className='button' onClick={toggleDescription}>{changeDescriptionButton()}</button>

        </div>
    );
}

export default Book;