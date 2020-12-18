export function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

export function getAllMovies() {
    return{
        type: "GET_MOVIES"
    }
}

export default function MovieReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "REMOVE_MOVIE": {            
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_MOVIES":
            return movies
        default:
            return movies
    }
}