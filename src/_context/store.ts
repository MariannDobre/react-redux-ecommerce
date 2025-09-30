import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
