import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../utils/api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiCall(
        "https://637476b908104a9c5f80a039.mockapi.io/Login",
        "POST",
        userData,
        { "Content-Type": "application/json" },
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = registerSlice.actions;

export default registerSlice.reducer;
