import { call, put, all, takeLatest} from 'redux-saga/effects'; 
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

function* clicouMenu () {
   
}

export  default all([
   takeLatest(types.CLICOU_MENU, clicouMenu) 
])