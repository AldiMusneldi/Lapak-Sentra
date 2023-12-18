import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    auth: false,
  },
  reducers: {
    updateAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

// generate action dan reduser
const loginReduser = loginSlice.reducer;
const { updateAuth } = loginSlice.actions;

export default loginReduser;
export { updateAuth };
