import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import shopReducer from "./shopSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartReducer,
      shop: shopReducer
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
