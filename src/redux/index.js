
import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
// ===============================================================
import { callBackSetInfo } from './reducers/reduce_demo'
import { baseHtmlConf } from './reducers/reduce_global'
// ====================================================
// 数据持久化
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk';
const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['global',]
};
const myPersistReducer = persistReducer(persistConfig, combineReducers({
    // global
    baseHtmlConf,
    // demo
    callBackSetInfo,

}))

const store = createStore(myPersistReducer,
    composeWithDevTools(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)
export default store
