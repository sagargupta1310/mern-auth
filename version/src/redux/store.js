import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userslice'; // Correctly imported reducer

export const store = configureStore({
  reducer: {
    user: userReducer, // Correct reducer name mapping
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
