import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategoriesAPI, fetchProductAPI } from "./productAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkApi) => {
    try {
      return await fetchProductAPI(params);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, thunkApi) => {
    try {
      return await fetchCategoriesAPI();
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
