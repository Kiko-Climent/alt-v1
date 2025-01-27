import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";

// Get collection data

export const fetchRoster = createAsyncThunk('roster(fectchRoster', async () => {
  const querySnapshot = await getDocs(collection(db, 'roster'));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id:doc.id, ...doc.data() });
  });
  return data;
});

const rosterSlice = createSlice({
  name: 'roster',
  initialState: {
    artists: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoster.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRoster.fulfilled, (state, action) => {
        state.loading = false;
        state.artists = action.payload;
      })
      .addCase(fetchRoster.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default rosterSlice.reducer;