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
                <div className={css.descriptionButton}>
                    <ExpandLessRoundedIcon/>
                    <div className={css.descriptionText}>
                        CLOSE DESCRIPTION
                    </div>
                </div>   
            )
        } else{
            return(
                <div className={css.descriptionButton}>
                    <ExpandMoreRoundedIcon/>
                    <div className={css.descriptionText}>
                        SHOW DESCRIPTION
                    </div>
                </div>   
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
                <button onClick={toggleDescription}>{changeDescriptionButton()}</button>

        </div>
    );
}

export default Book;