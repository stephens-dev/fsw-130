import store from "./redux/index"
import {addMovie, removeMovie, getAllMovies} from "./redux/movies.js"
import {addShow, removeShow, getAllShows} from "./redux/tvShows.js"

store.dispatch(addMovie("freddy"))
store.dispatch(addShow("jason"))
store.dispatch(removeShow("jason"))
store.dispatch(removeMovie("freddy"))
store.dispatch(addMovie("freddy"))
store.dispatch(getAllMovies())
store.dispatch(getAllShows())



