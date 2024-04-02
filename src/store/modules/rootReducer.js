import { combineReducers } from "redux";

import auth from './auth/reducer'
import menu from './menu/reducer'

export default combineReducers({
    auth,
    menu
}); 