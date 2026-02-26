import { createSlice } from "@reduxjs/toolkit";

const initDateSlice = {
  selectedDate: null,
  isDateSelected: false,
};

export const dateSlice = createSlice({
  name: "date",
  initialState: initDateSlice,
  reducers: {
    setSelectedDate: (state, actions) => {
      if (actions.payload) {
        state.selectedDate = actions.payload;
        state.isDateSelected = true;
      } else {
        state.selectedDate = null;
        state.isDateSelected = false;
      }
    },
  },
});

export const { setSelectedDate } = dateSlice.actions;

export const dateSliceReducer = dateSlice.reducer;
