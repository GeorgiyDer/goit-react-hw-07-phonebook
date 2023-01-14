import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContact: (_, action) => {
            return action.payload.toLowerCase();

        },
    },
});

export const { filterContact } = filterSlice.actions;

