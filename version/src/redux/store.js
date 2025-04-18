import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage
import userReducer from './user/userslice'; // Your user slice

// Combine reducers (in case you add more slices later)
const rootReducer = combineReducers({
  user: userReducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Export persistor
export const persistor = persistStore(store);
