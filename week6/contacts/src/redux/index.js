import NameReducer from './name.js'
import PhoneReducer from './phone.js'
import EmailReducer from './email.js'
const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
    name: NameReducer,
    phone: PhoneReducer,
    email: EmailReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store
