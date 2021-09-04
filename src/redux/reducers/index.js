import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Clients from './Clients'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    clients: Clients
});

export default reducers;