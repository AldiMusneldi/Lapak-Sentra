import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import katagoriRedusers from '../features/katagoriSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    Skatagori: katagoriRedusers,
  },
});
