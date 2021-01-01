export function addEmail(email) {
    return {
        type: "ADD_EMAIL",
        payload: email
    }
}
export function removeEmail(email) {
    return {
        type: "REMOVE_EMAIL",
        payload: email
    }
}
export function getEmails() {
    return { type: "GET_EMAILS" }
}


export default function PhoneReducer(email = [], action) {
    switch(action.type) {
        case "ADD_EMAIL":
            return[...email, action.payload]
            case "REMOVE_EMAIL": {
                const updatedemail = email.filter(email => email.toLowerCase() !== action.payload.toLowerCase())
                return updatedemail
            }
            case "GET_EMAILS":
                return email
        default:
            return email
    }
}