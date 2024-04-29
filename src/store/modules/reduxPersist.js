import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducers = persistReducer(
        {
            key: 'CARRINHO-COMPRA',
            storage,
            whitelist: ['auth', 'carrinhodecompra']

        },
        reducers
    );

    return persistedReducers;
}