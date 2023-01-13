import { configureStore } from '@reduxjs/toolkit'
import { persistContactsReducer } from './contacts.slice';
import { filterSlice } from './filter.slice'
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'

    
export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        });
    },
})

export const persistor = persistStore(store)