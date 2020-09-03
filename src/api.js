export const loadData = async (filter, nrOfItems, startIndex) => {
    console.log(filter);
    const apiKey = "AIzaSyBvJcFRNsQK5A31KFrcu6oX5FHZP9iQ-go";
    
    const url = `https://www.googleapis.com/books/v1/volumes?q=${filter}&startIndex=${startIndex}&printType=books&maxResults=${nrOfItems}&fields=items&key=${apiKey}`

    const response = await fetch(url);
    const jsonResponse = await response.json()
    console.log(jsonResponse.items)
    const data = (jsonResponse.items);
    return data;
}