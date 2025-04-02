import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./Redux/usersReducer.js";
const store = configureStore({
    reducer: {
      users: usersReducer,
    },
});

export default store;