import { SET_USER_LIST } from '../constants/Clients.js'

const initState = {
    clientList: [],
}

const clients = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_LIST:
            return {
                ...state,
                clientList: action.payload
            }
        default:
            return state;
    }
}

export default clients