import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProdusctFasilitas = createAsyncThunk('getProdukFasilitas', async (arg) => {
  const result = await axios(`http://localhost:8000/api/v1/kost/`).then((res) => res.data);
  return result;
});

// membuat inisial state
const products = createSlice({
  name: 'Fasilitas Rumah',
  initialState: {
    products: [],
    cart: [],
    notif: false,
    loading: false,
    error: null,
  },
  reducers: {
    addTocart(state, action) {
      let oldItems = state.cart.filter((val) => val.id !== action.payload.id);
      let NewItems = state.cart.filter((val) => val.id === action.payload.id);
      let NewQty = NewItems.length ? NewItems[0]?.qty + 1 : 1;
      NewItems.length ? (NewItems[0] = { ...action.payload, qty: NewQty }) : (NewItems = [{ ...action.payload, qty: NewQty }]);
      oldItems.push(NewItems[0]);
      state.cart = oldItems;
    },
    updateNotif(state, action) {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProdusctFasilitas.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const ProdukctReduser = products.reducer;
const { updateData, updateNotif, addTocart } = products.actions;

export default ProdukctReduser;
export { updateData, updateNotif, addTocart };
