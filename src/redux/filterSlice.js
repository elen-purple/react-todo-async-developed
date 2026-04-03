import { statusFilters } from "./constants";
import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
