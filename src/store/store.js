import { configureStore } from "@reduxjs/toolkit";
import rosterReducer from "../components/Features/Roster/rosterSlice";





export const store = configureStore({
  reducer: {
    roster: rosterReducer,
  },
});

export default store;