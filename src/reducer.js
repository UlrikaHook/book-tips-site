import noImg from './undraw_file_searching_duff.svg';


const initialState = {
    books: [
        {
            id: 2345,
            title: "Hej",
            subtitle: "på dig",
            authors: ["Selma"],
            description: "En hej-bok",
            image: noImg
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            state = {
                books: [...state.books, action.payload]
            }
            break;
        case "REMOVE_FAVORITE":
            state = {
                books: state.books.filter((book)=> book.id !== action.payload)
            }
            break;
    }
    return state;
}

export default reducer;