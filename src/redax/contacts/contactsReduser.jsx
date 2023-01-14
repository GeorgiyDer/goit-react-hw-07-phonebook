import { fetchContacts, deleteContacts, addContacts } from "./contactsOperations";
import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        },
    
    extraReducers: {
        [fetchContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },

        [fetchContacts.pending]: (state, _) => {
            state.isLoading = true;
            state.error = null;
        },

        [fetchContacts.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        [deleteContacts.fulfilled]: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.isLoading = false;
        },

        [deleteContacts.pending]: (state, _) => {
            state.isLoading = true;
            state.error = null;
        },

        [deleteContacts.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },  

        [addContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.unshift(action.payload);
        },

        [addContacts.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        [addContacts.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

    },
});
