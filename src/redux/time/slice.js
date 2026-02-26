import { createSlice } from "@reduxjs/toolkit";

const initTimeSlice = {
  timeIntervals: [
    { label: "8:00", value: "8:00 - 8:30" },
    { label: "8:30", value: "8:30 - 9:00" },
    { label: "9:00", value: "9:00 - 9:30" },
    { label: "9:30", value: "9:30 - 10:00" },
    { label: "10:00", value: "10:00 - 10:30" },
    { label: "10:30", value: "10:30 - 11:00" },
    { label: "11:00", value: "11:00 - 11:30" },
    { label: "11:30", value: "11:30 - 12:00" },
    { label: "12:00", value: "12:00 - 12:30" },
    { label: "12:30", value: "12:30 - 13:00" },
    { label: "13:00", value: "13:00 - 13:30" },
    { label: "13:30", value: "13:30 - 14:00" },
    { label: "14:00", value: "14:00 - 14:30" },
    { label: "14:30", value: "14:30 - 15:00" },
    { label: "15:00", value: "15:00 - 15:30" },
    { label: "15:30", value: "15:30 - 16:00" },
    { label: "16:00", value: "16:00 - 16:30" },
    { label: "16:30", value: "16:30 - 17:00" },
    { label: "17:00", value: "17:00 - 17:30" },
    { label: "17:30", value: "17:30 - 18:00" },
    { label: "18:00", value: "18:00 - 18:30" },
    { label: "18:30", value: "18:30 - 19:00" },
    { label: "19:00", value: "19:00 - 19:30" },
    { label: "19:30", value: "19:30 - 20:00" },
  ],
  selectedTime: null,
  isTimeSelected: false,
};

export const timeSlice = createSlice({
  name: "time",
  initialState: initTimeSlice,
  reducers: {
    setSelectedTime: (state, actions) => {
      if (actions.payload) {
        state.selectedTime = actions.payload;
      }
    },
  },
});

export const { setSelectedTime } = timeSlice.actions;

export const timeSliceReducer = timeSlice.reducer;
