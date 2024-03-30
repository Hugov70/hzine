import { legacy_createStore as createStore} from 'redux';

const initialState = {
    menuAberto: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BOTAO_MENU_CLICADO': 
            console.log(state)
            const newState = { ...state }
            newState.menuAberto = !newState.menuAberto;
            return newState;

        default:
            return state; 
    }
}

const store = createStore( reducer ); 

export default store; 