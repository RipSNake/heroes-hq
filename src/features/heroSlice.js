import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IDLE, LOADING, SUCCEEDED, FAILED } from './../constants';

import apiService from './../services/apiService';

// fetch all heros from the API
const getHeroes = createAsyncThunk(
  'hero/getHeroes',
  async () => {
    return await apiService();
  }
)

export const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    heroes: [],
    myTeam: [],
    status: IDLE,
    error: null
  },
  reducers: {
  	// teamreducers
    addHeroTeam: (state,{hero}) => {
      state.heroes = state.heroes.concat(hero);
    },
    deleteHeroTeam: (state, {id}) => {
      console.log('Delete Hero', id);
    },
  },
  extraReducers: {
  	[fetchUserById.pending]: (state, action) => {
  		state.status = LOADING;
  	},
  	[fetchUserById.fulfilled]: (state, action) => {
  		console.log(action.payload);
  		state.heroes = state.heroes.concat(action.payload);
  		state.status = SUCCEEDED;
  	},
  	[fetchUserById.rejected]: (state, action) => {
  		state.status = FAILED;
  		state.error = action.error;
  	},
  }
})

// Action creators are generated for each case reducer function
export const { addHero, deleteHero, editHero } = heroSlice.actions

export default heroSlice.reducer