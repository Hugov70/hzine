import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import menu from './menu/saga';
import carrinhodecompra from './carrinhodecompra/saga';

export default function* rootSaga() {
    return yield all([auth, menu, carrinhodecompra]);
}