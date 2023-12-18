import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isloading: false,
  message: '',
};

export const LoginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', {
      email: user.email,
      password: user.password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getMe = createAsyncThunk('user/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:8000/me');
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk('user/LogOut', async () => {
  await axios.delete('http://localhost:8000/logout');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isloading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // GET ME
    builder.addCase(getMe.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isloading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
