import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import katagoriRedusers from '../features/katagoriSlice';
import loginReduser from '../features/loginSlice';
import ProdukctReduser from '../features/keranjangSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    Skatagori: katagoriRedusers,
    login: loginReduser,
    products: ProdukctReduser,
  },
});
