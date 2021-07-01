import { createSlice } from '@reduxjs/toolkit';
import { IDLE } from './../constants';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token: null,
    status: IDLE,
    error: null
  },
  reducers: {
    login: (state, {email, token}) => {
      state.user = email;
      state.token = token;
      localStorage.setItem('user', email);
      localStorage.setItem('token', token);
    },
  	logout: (state) => {
  		state.user = {};
  		state.token = null;
  	},
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer;