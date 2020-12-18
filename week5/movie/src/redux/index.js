import MovieReducer from "./movies.js"
import showReducer from "./tvShows"
const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
    movies: MovieReducer,
    shows: showReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store