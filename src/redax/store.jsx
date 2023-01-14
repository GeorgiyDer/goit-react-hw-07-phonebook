import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './contacts/filter.slice'
import { contactSlice } from './contacts/contactsReduser'

export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
        filter: filterSlice.reducer,
    },
})

