import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)
