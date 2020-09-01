import React, { useEffect, useState } from 'react';
import './Category.css';
import Book from '../Book/Book';


const Category = ({category}) => {
    
    const [books, setBooks] = useState([])

    useEffect(()=>{
        load();
    }, [])

    const load = async () => {
        const apiKey = "AIzaSyBvJcFRNsQK5A31KFrcu6oX5FHZP9iQ-go";
        const startIndex = Math.floor(Math.random() * 100);
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${startIndex}&printType=books&maxResults=3&fields=items&key=${apiKey}`

        const response = await fetch(url);
        const jsonResponse = await response.json()
        console.log(jsonResponse.items)
        setBooks(jsonResponse.items)
    }
    
    const bookComponents = books.map(book => {
       return (
           <Book 
            key = {book.id} 
            title = {book.volumeInfo.title} 
            subtitle = {book.volumeInfo.subtitle} 
            authors = {book.volumeInfo.authors} 
            description = {book.volumeInfo.description} 
            image = {(book.volumeInfo.imageLinks === undefined) ? "" : book.volumeInfo.imageLinks.thumbnail}
           />
       )
    })

    //Tll Books skickas key som React-id samt book i arrayen books.
    return (
        <div className="Category">

            
            <div>
                <header>
                    <h3>{category}</h3>
                    <button onClick={load}>Show me new books</button>
                </header>
                <div className = "bookContainer">
                    {bookComponents}
                </div>
                
            </div>
            
        </div>
    );
}

export default Category;