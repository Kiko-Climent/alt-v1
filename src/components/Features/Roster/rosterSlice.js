import { createSlice } from "@reduxjs/toolkit";

const rosterSlice = createSlice({
  name: "roster",
  initialState: {
    items: [], // Lista de artistas
    loading: false,
    error: null,
    item: null, // Artista seleccionado
    itemLoading: false,
    itemError: null,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setRoster(state, action) {
      state.items = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setItemLoading(state, action) {
      state.itemLoading = action.payload;
    },
    setArtist(state, action) {
      state.item = action.payload;
    },
    setItemError(state, action) {
      state.itemError = action.payload;
    },
  },
});

export const {
  setLoading,
  setRoster,
  setError,
  setItemLoading,
  setArtist,
  setItemError,
} = rosterSlice.actions;

export default rosterSlice.reducer;