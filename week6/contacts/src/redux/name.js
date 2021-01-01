export function addName(name) {
    return {
        type: "ADD_NAME",
        payload: name
    }
}
export function removeName(name) {
    return {
        type: "REMOVE_NAME",
        payload: name
    }
}
export function getNames() {
    return { type: "GET_NAMES"}
}



export default function NameReducer(name = [], action) {
    switch(action.type) {
        case "ADD_NAME":
            return[...name, action.payload]
            case "REMOVE_NAME": {
                const updatedName = name.filter(name => name.toLowerCase() !== action.payload.toLowerCase())
                return updatedName
            }
        case "GET_NAMES":
            return name
        default:
            return name
    }
}