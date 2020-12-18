import store from "./redux/index"
import {addMovie} from "./redux/movies.js"

store.dispatch(addMovie("freddy"))