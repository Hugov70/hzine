import * as types from '../types' 

export function clicouCarrinho() {
    return {
        type: types.CLICOU_CARRINHO,
        
    }
}

export function clicouBotaoComprar(payload) {
    return {
        type: types.CLICOU_BOTAO_COMPRAR,
        payload
    }
}

export function addOneProduct(payload) {
    return {
        type: types.ADD_ONE_PRODUCT,
        payload
    }
}

export function removeOneProduct(payload) {
    return {
        type: types.REMOVE_ONE_PRODUCT,
        payload
    }
}

export function deleteProduct(payload) {
    return {
        type: types.DELETE_PRODUCT,
        payload
    }
}

