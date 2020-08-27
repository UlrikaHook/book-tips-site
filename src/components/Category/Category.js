import React, { useEffect, useState } from 'react';
import './Category.css';
import Book from '../Book/Book';


const Category = ({category}) => {
    
    const [books, setBooks] = useState([]);

    useEffect(()=>{

        const getData = async () => {
            //const url = "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data";
            const url = `http://openlibrary.org/search.json?subject=${category}&limit=3`;

            const response = await fetch(url);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setBooks(jsonResponse);
        }

        getData();
        //API-request based on category
        //put json-result in state books
    }, [])
    
    //Tll Books skickas key som React-id samt book i arrayen books.
    return (
        <div className="Category">
            <header>
                <h3>{category}</h3>
                <button>Show me new books</button>
            </header>
            
            <div className="bookContainer">
                <Book />
                <Book />
                <Book />
            </div>
            
        </div>
    );
}

export default Category;