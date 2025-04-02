import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
};

const apiUrl = 'https://67ed397a4387d9117bbccfb7.mockapi.io/api/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
    const response = await axios.post(apiUrl, newUser);
    return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (updatedUser) => {
    const { id, ...data } = updatedUser;
    const response = await axios.put(`${apiUrl}/${id}`, data);
    return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                state.users[index] = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            });
    },
});

export default usersSlice.reducer;