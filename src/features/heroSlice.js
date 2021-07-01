import { createSlice } from '@reduxjs/toolkit';
import { IDLE } from './../constants';
import myTeam from './../components/HeroesList/myTeam';

export const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    heroes: myTeam,
    status: IDLE,
    error: null
  },
  reducers: {
  	// teamreducers
    addHero: (state, action) => {
      state.heroes = state.heroes.concat(action.payload);
    },
    deleteHero: (state, action) => {
      console.log(action);
      state.heroes = state.heroes.filter(hero => hero.id !== action.payload.id);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addHero, deleteHero } = heroSlice.actions;

export default heroSlice.reducer