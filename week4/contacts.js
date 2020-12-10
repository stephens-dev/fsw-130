const redux = require("redux")


function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact.split(",")
    }
}

function deleteContact(contact) {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
}

const initialState = {
    firstName: [],
    lastName: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_CONTACT":
            const element = state.firstName.indexOf(action.payload)
            const firstNames = state.firstName.splice((element, 1))
            const lastNames = state.lastName.splice((element, 1))

            return {
                firstName: firstNames, lastName: lastNames
                
            }
            case "ADD_CONTACT":
                return {
                    ...state,
                    firstName: [...state.firstName, action.payload[0]],
                    lastName: [...state.lastName, action.payload[1]]
                }
                default:
                    return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact("joe, smoe"))
store.dispatch(addContact("john, henery"))
store.dispatch(deleteContact("joe"))
