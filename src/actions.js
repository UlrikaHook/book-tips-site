export const addFavorite = (bookObject) => {
    return {
        type: "ADD_FAVORITE",
        payload: bookObject
    }
}

export const removeFavorite = (bookId) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: bookId
    }
}