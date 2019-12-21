import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import { env } from '../runtime.env';
import rootReducer from './root-reducer';

const middlewares = [];

if (env.NODE_ENV === 'development') {
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
