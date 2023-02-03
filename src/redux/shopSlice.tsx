import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getShop = createAsyncThunk(
  "shop/getProducts",
  async (params: string) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=5" + params
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  shop: [],
  params: { },
  loading: false,
} as any;

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    search: (state, action) => {
      state.loading = true;
      state.params = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShop.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    });

    builder.addCase(getShop.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { search } =  shopSlice.actions;

export default shopSlice.reducer;