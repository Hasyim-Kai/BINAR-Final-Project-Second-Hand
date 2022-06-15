import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore
} from 'redux';
import {
    composeWithDevTools
} from "redux-devtools-extension";
import {
    persistReducer,
    persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const persistConfig = {
    key: "login-auth",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);
export {
    store,
    persistor
};