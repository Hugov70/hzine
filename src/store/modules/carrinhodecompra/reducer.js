import * as types from '../types'

const initialState = {
    carrinhoAberto: false,
    itensCarrinho: [],
    valorItensCarrinho: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.CLICOU_CARRINHO: {
            const newState = { ...state }
            newState.carrinhoAberto = !newState.carrinhoAberto;
            return newState;
        }

        case types.CLICOU_BOTAO_COMPRAR: {
            const newState = { ...state }
            const nomeProduto = action.payload.nomeProduto;
            const precoProduto = Number(action.payload.precoProduto);
            let precoTotalProduto = action.payload.precoProduto;
            const imagemProduto = action.payload.imagemProduto;
            const produtoRepetido = verificarProduto(newState.itensCarrinho, 'nomeProduto', nomeProduto)
            if (produtoRepetido === 0 || produtoRepetido) {
                const quantidade = newState.itensCarrinho[produtoRepetido].quantidade + 1;
                precoTotalProduto = quantidade * precoProduto;
                newState.itensCarrinho[produtoRepetido].quantidade = quantidade;
                newState.itensCarrinho[produtoRepetido].precoTotalProduto = precoTotalProduto;
            } else {
                newState.itensCarrinho.push({ nomeProduto, precoProduto, precoTotalProduto, imagemProduto, quantidade: 1 })
            }

            const valorTotalItens = calcularValorTotal(newState);
            newState.valorItensCarrinho = valorTotalItens;
            return newState;
        }

        case types.ADD_ONE_PRODUCT: {
            const newState = { ...state };
            const nomeProduto = action.payload.nomeProduto;
            const precoProduto = Number(action.payload.precoProduto);
            const index = newState.itensCarrinho.findIndex(item => item.nomeProduto === nomeProduto);
            const quantidade = newState.itensCarrinho[index].quantidade + 1;
            let precoTotalProduto = quantidade * precoProduto;

            if (quantidade >= 1) {
                newState.itensCarrinho[index].quantidade = quantidade;
                newState.itensCarrinho[index].precoTotalProduto = precoTotalProduto;
            }

            const valorTotalItens = calcularValorTotal(newState);
            newState.valorItensCarrinho = valorTotalItens;
            return newState;

        }

        case types.REMOVE_ONE_PRODUCT: {
            const newState = { ...state };
            const nomeProduto = action.payload.nomeProduto;
            const precoProduto = Number(action.payload.precoProduto);
            const index = newState.itensCarrinho.findIndex(item => item.nomeProduto === nomeProduto);
            const quantidade = newState.itensCarrinho[index].quantidade - 1;
            let precoTotalProduto = quantidade * precoProduto;

            if (quantidade >= 1) {
                newState.itensCarrinho[index].quantidade = quantidade;
                newState.itensCarrinho[index].precoTotalProduto = precoTotalProduto;
            }

            const valorTotalItens = calcularValorTotal(newState);
            newState.valorItensCarrinho = valorTotalItens;
            return newState;

        }

        case types.DELETE_PRODUCT: {
            const newState = { ...state };
            const nomeProduto = action.payload;
            const index = newState.itensCarrinho.findIndex(item => item.nomeProduto === nomeProduto);
            newState.itensCarrinho.splice(index, 1);
            const valorTotalItens = calcularValorTotal(newState);
            newState.valorItensCarrinho = valorTotalItens;
        }




        default:
            return state;
    }
}

function verificarProduto(array, chave, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][chave] === valor) {
            return i;
        }
    }
    return false;
}

function calcularValorTotal(state) {
    const newState = { ...state };
    let valorTotalItens = 0;
    newState.itensCarrinho.forEach(item => {
        const itemvalor = Number(item.precoTotalProduto)
        valorTotalItens += itemvalor;
    });
    return valorTotalItens;
}