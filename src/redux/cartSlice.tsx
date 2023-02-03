import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: (typeof window !== "undefined") ? JSON.parse(window.sessionStorage.getItem("cart") || '[]') : [],
  loading: false,
  cookies: (typeof window !== "undefined") ? window.sessionStorage.getItem("cookies") : "false"
} as any;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
      state.loading = false;
      state.cart.push(action.payload);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("cart", JSON.stringify(state.cart))
      } 
    },

    removeItem: (state, action) => {
      state.loading = false;
      let index = -1;
      for (let i = 0; i < state.cart.length; i++ ) {
        if (state.cart[i].id === action.payload) {
          index = i;
          break
        }
      }
      if (index > -1) {
        state.cart.splice(index,1)
      }
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("cart", JSON.stringify(state.cart))
      } 
    },

    removeAllOfKind: (state, action) => {
      state.loading = false;
      state.cart = [...state.cart.filter((element: any)=>element?.id !== action.payload)]
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("cart", JSON.stringify(state.cart))
      } 
    },


    clearCart: (state, action) => {
      state.loading = false;
      state.cart = []
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("cart", JSON.stringify(state.cart))
      } 
    },

    consentCookie: (state) => {
      state.loading = false;
      state.cookies = 'true';
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("cookies", 'true')
      } 
    },
  },

});

export const { addItem, removeItem, removeAllOfKind, clearCart, consentCookie } =  cartSlice.actions;

export default cartSlice.reducer;