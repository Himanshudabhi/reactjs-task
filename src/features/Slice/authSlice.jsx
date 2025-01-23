import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ROUTES } from "../../constants/routes";
import { apiCall } from "../../utils/api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    console.log("email", email);

    try {
      const response = await apiCall(
        "https://637476b908104a9c5f80a039.mockapi.io/Login",
        "GET",
      );

      const user = response.find(
        (user) => user.email === email && user.password === password,
      );
      console.log("user", user);

      if (!user) {
        throw new Error("Invalid email or password");
      }
      return user; // return the user data
    } catch (error) {
      throw new Error(error.message || "Login failed");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // store user data
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
