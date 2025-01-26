import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../utils/api";


export const fetchEstimates = createAsyncThunk(
  "estimates/fetchEstimates",
  async (_, { rejectWithValue }) => {
    try {
      const data = await apiCall("https://67920e6bcf994cc680487cf6.mockapi.io/estimate");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const estimatesSlice = createSlice({
  name: "estimates",
  initialState: {
    estimates: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEstimates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEstimates.fulfilled, (state, action) => {
        state.loading = false;
        state.estimates = action.payload;
      })
      .addCase(fetchEstimates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch estimates.";
      });
  },
});

export default estimatesSlice.reducer;
