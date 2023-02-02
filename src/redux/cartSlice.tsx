import { createSlice } from "@reduxjs/toolkit";

interface ShopCardInterface {
  id?: number,
  name?: string,
  brand?: string,
  description?: string,
  photo?: string;
  price?: string
}

const initialState = {
  cart: (typeof window !== "undefined") ? JSON.parse(window.localStorage.getItem("cart") || '[]') : [],
  loading: false,
  cookies: (typeof window !== "undefined") ? window.localStorage.getItem("cookies") : "false"
} as any;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
      state.loading = false;
      state.cart.push(action.payload);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("cart", JSON.stringify(state.cart))
      } 
    },

    removeItem: (state, action) => {
      state.loading = false;
      state.cart.push(...action.payload);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("cart", JSON.stringify(state.cart))
      } 
    },

    consentCookie: (state) => {
      state.loading = false;
      state.cookies = 'true';
      if (typeof window !== "undefined") {
        window.localStorage.setItem("cookies", 'true')
      } 
    },
  },

});

export const { addItem, removeItem, consentCookie } =  cartSlice.actions;

export default cartSlice.reducer;