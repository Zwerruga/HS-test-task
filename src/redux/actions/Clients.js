import { SET_USER_LIST } from '../constants/Clients.js'

export const setUserList = (userList) => {
    return {
        type: SET_USER_LIST,
        payload: userList
    }
};