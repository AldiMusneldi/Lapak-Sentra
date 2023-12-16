import { createSlice } from '@reduxjs/toolkit';
import SemuaData from '../data/SemuaData';

// panggil Api

const KatagoriSlice = createSlice({
  name: 'SemuaKatagori',
  initialState: {
    Skatagori: SemuaData,
    lihatSemua: [],
    filteredDataK: [],
    filteredDataF: [],
    filterFavorit: [],
  },
  reducers: {
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
  },
});

// generate actions dan redusers
const katagoriRedusers = KatagoriSlice.reducer;
const { filteredK, filteredF, lihatS, filterFavorit } = KatagoriSlice.actions;

// export actions dan reduser
export default katagoriRedusers;
export { filteredK, filteredF, lihatS, filterFavorit };
