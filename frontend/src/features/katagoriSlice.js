import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SemuaData from '../data/SemuaData';
import axios from 'axios';

// panggil Api
export const getHunian = createAsyncThunk('getHunian', async (arg) => {
  const result = await axios('http://localhost:8000/api/v1/kost').then((res) => res.data);
  return result;
});

const KatagoriSlice = createSlice({
  name: 'SemuaKatagori',
  initialState: {
    Skatagori: SemuaData,
    dataHunian: [],
    lihatSemua: [],
    filteredDataK: [],
    filteredDataF: [],
    filterFavorit: [],
    filterFavoritF: [],
  },
  reducers: {
    updateHunian(state, action) {
      state.dataHunian = action.payload;
    },
    // fungsi untuk memfilter dari semua katagori
    lihatS(state, action) {
      const { katagoriFilter } = action.payload;
      state.lihatSemua = katagoriFilter ? state.Skatagori.filter((filtr) => filtr.katagori === katagoriFilter) : state.Skatagori;
    },
    // fungsi untuk memfilter dari katagori kost & kontrakan
    filteredK(state, action) {
      const { kost, kontrakan } = action.payload;
      // Melakukan filter pada state Skatagori dan menyimpan hasilnya di state filteredDataK
      state.filteredDataK = state.Skatagori.filter((filtr) => filtr.katagori === kost || filtr.katagori === kontrakan);
    },
    // fungsi untuk memfilter dari katagori fasilitas rumah
    filteredF(state, action) {
      const fasilitas = action.payload;
      state.filteredDataF = state.Skatagori.filter((filtr) => filtr.katagori === fasilitas);
    },
    // fungsi untuk memfilter favotrit
    filterFavorit(state, action) {
      const favorit = action.payload;
      state.filterFavorit = state.Skatagori.filter((filtr) => filtr.favorit === favorit);
    },
    filterFavoritF(state, action) {
      const favoritf = action.payload;
      state.filterFavoritF = state.Skatagori.filter((filtr) => filtr.favoritf === favoritf);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHunian.fulfilled, (state, action) => {
      state.dataHunian = action.payload;
    });
  },
});

// generate actions dan redusers
const katagoriRedusers = KatagoriSlice.reducer;
const { filteredK, filteredF, lihatS, filterFavorit, filterFavoritF, updateHunian } = KatagoriSlice.actions;

// export actions dan reduser
export default katagoriRedusers;
export { filteredK, filteredF, lihatS, filterFavorit, filterFavoritF, updateHunian };
