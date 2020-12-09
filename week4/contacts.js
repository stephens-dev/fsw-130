const redux = require("redux")


function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function deleteContact(contact) {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
}

const initialState = {
    contacts: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_CONTACT":
            const contactsCopy = [...state.contacts]
            const updatedContacts = state.contacts.filter(contact => contact !== action.payload)
            return {
                ...state,
                contacts: updatedContacts
            }
            case "ADD_CONTACT":
                return {
                    ...state,
                    contacts: [...state.contacts, action.payload]
                }
                default:
                    return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact("fred"))
store.dispatch(addContact("joe"))
store.dispatch(deleteContact("joe"))