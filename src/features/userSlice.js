import { createSlice } from '@reduxjs/toolkit';
import { IDLE, SUCCEEDED } from './../constants';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token: null,
    status: IDLE,
    error: null
  },
  reducers: {
    login: (state, action) => {
      const {email, token} = action.payload;
      state.user = email;
      state.token = token;
      state.status = SUCCEEDED;
      localStorage.setItem('user', email);
      localStorage.setItem('token', token);
    },
  	logout: (state) => {
  		state.user = {};
  		state.token = null;
      state.status = IDLE;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      console.log('logout from store DONE');
  	},
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer;