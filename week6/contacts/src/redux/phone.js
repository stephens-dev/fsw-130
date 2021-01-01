export function addPhone(phone) {
    return {
        type: "ADD_PHONE",
        payload: phone
    }
}

export function removePhone(phone) {
    return {
        type: "REMOVE_PHONE",
        payload: phone
    }
}

export function getPhones() {
    return {type: "GET_PHONES"}
}



export default function PhoneReducer(phone = [], action) {
    switch(action.type) {
        case "ADD_PHONE":
            return[...phone, action.payload]
        case "REMOVE_PHONE": {
            const updatedPhone = phone.filter(phone => phone.toLowerCase() !== action.payload.toLowerCase())
            return updatedPhone
        }
        case "GET_PHONES":
            return phone
            
        default:
            return phone
    }
}