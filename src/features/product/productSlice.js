import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchProducts } from "./productThunk";

const authSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    total: 0,
    loading: false,
  },
  reducers: {},

  extraReducers: (builer) => {
    builer
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default authSlice.reducer;
