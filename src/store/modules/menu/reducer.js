import * as types from '../types'

const initialState = {
    menuAberto: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.CLICOU_MENU: {
            const newState = { ...state }
            newState.menuAberto = !newState.menuAberto;
            return newState;
        }



        default:
            return state;
    }
}