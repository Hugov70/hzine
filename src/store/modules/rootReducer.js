import { combineReducers } from "redux";

import auth from './auth/reducer'
import menu from './menu/reducer'
import carrinhodecompra from './carrinhodecompra/reducer';

export default combineReducers({
    auth,
    menu,
    carrinhodecompra
}); 