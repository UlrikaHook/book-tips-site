import React, { useEffect, useState } from 'react';
import './Category.css';
import Book from '../Book/Book';


const Category = ({category}) => {
    
    const [books, setBooks] = useState([]);

    useEffect(()=>{

        async function getData() {
            const apiKey = "AIzaSyBvJcFRNsQK5A31KFrcu6oX5FHZP9iQ-go";
            const startIndex = Math.floor(Math.random() * 100);
            const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${startIndex}&printType=books&maxResults=3&fields=items&key=${apiKey}`

            const response = await fetch(url);
            const jsonResponse = await response.json()
            console.log(books);
            console.log(jsonResponse);
            console.log(jsonResponse.items);
            setBooks(jsonResponse);
            //setBooks(jsonResponse.items)
            console.log(books);
       
        }

        getData();
    
        //API-request based on category
        //put json-result in state books
    }, [])
    
    /*const bookComponents = books.items.map(book => {
       console.log(book.volumeInfo.title);
    })*/

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