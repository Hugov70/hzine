import { call, put, all, takeLatest} from 'redux-saga/effects'; 
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

function* clicouCarrinho () {
   
}

function* addOneProduct () {

}

export  default all([
   takeLatest(types.CLICOU_CARRINHO, clicouCarrinho),
   takeLatest(types.ADD_ONE_PRODUCT, addOneProduct)
])