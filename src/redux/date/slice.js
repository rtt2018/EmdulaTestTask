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
        state = initDateSlice;
      }
    },
  },
});

export const { setSelectedDate } = dateSlice.actions;

export default dateSlice.reducer;
