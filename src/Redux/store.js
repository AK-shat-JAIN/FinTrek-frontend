import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice';   //doubt

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
    },
    devTools: true,
});

export default store;