import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className = "Navbar">
            <Link to="/">Home </Link>
            <Link to="/Categories">Books by categoires </Link>
            <Link to="/Search">Search for book </Link>
        </div>
    )
}

export default Navbar;