import { createSlice } from "@reduxjs/toolkit";

const initMemberSlice = {
  name: "",
  email: "",
  guest: [],
  comments: "",
  isSheduleCreated: false,
  shedule: [],
};

export const memberSlice = createSlice({
  name: "date",
  initialState: initMemberSlice,
  reducers: {
    setMemberData: (state, actions) => {
      if (actions.payload) {
        state.selectedDate = actions.payload;
        state.isDateSelected = true;
      } else {
        state = initMemberSlice;
      }
    },
  },
});

export const { setMemberData } = memberSlice.actions;

export const memberSliceReducer = memberSlice.reducer;
