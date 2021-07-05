import { configureStore } from '@reduxjs/toolkit'
import heroReducer from './../features/heroSlice';
import userReducer from './../features/userSlice';

export default configureStore({
  reducer: {
    hero: heroReducer,
    user: userReducer,
  },
})