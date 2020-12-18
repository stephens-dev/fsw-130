const redux = require("redux")
const {combineReducers, createStore} = redux
import MovieReducer from "./movies.js"

const rootReducer = combineReducers({
    movies: MovieReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store