import noImg from './undraw_file_searching_duff.svg';

export const loadData = async (filter, nrOfItems, startIndex) => {
    const apiKey = "AIzaSyBvJcFRNsQK5A31KFrcu6oX5FHZP9iQ-go";
    
    const url = `https://www.googleapis.com/books/v1/volumes?q=${filter}&startIndex=${startIndex}&printType=books&maxResults=${nrOfItems}&fields=items&key=${apiKey}`

    const response = await fetch(url);
    const jsonResponse = await response.json()
    const data = jsonResponse.items;

    let books;
    if(data === undefined){
        books = undefined
    } else {
        books = data.map((item) => {
            return ({
                id: item.id,
                title: item.volumeInfo.title,
                subtitle: item.volumeInfo.subtitle,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                image: (item.volumeInfo.imageLinks === undefined) ? noImg : item.volumeInfo.imageLinks.thumbnail
            })
        })
    }

    return books;
}