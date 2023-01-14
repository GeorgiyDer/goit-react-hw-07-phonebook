import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://63c1557a99c0a15d28e726be.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        try {
        const { data }  = await axios.get('/contacts');
        return data;
        } catch (error) {
        return error;
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contact/deleteContact",
    async (id, thunkAPI) => {
        try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    }
);


export const addContacts = createAsyncThunk(
    "contact/addContact",
    async (contact, thunkAPI) => {
        try {
        const { data } = await axios.post("/contacts", (contact));
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    }
);
