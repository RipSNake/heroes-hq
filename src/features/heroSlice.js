//import { createSlice } from '@reduxjs/toolkit';
// import { IDLE, LOADING, SUCCEEDED, FAILED } from './../constants';

// export const heroSlice = createSlice({
//   name: 'hero',
//   initialState: {
//     heroes: [],
//     status: IDLE,
//     error: null
//   },
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.heroes = state.heroes.concat({name: 'New Hero'})
//     },
//     decrement: (state) => {
//       console.log('Decrement Hero');
//     },
//     incrementByAmount: (state, action) => {
//       console.log('Increment by amount of action.payload: ',action.payload);
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = heroSlice.actions

// export default heroSlice.reducer