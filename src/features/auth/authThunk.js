import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI } from "./authAPI";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkApi) => {
    try {
      const data = await loginUserAPI(credentials);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
