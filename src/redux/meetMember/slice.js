import { createSlice } from "@reduxjs/toolkit";

const initMemberSlice = {
  name: "",
  email: "",
  guest: "",
  comments: "",
  isSheduleCreated: false,
  shedule: "",
};

export const memberSlice = createSlice({
  name: "date",
  initialState: initMemberSlice,
  reducers: {
    setMemberDataAction: (state, actions) => {
      Object.assign(state, actions.payload);
      state.isSheduleCreated = true;
    },
  },
});

export const { setMemberDataAction } = memberSlice.actions;

export const memberSliceReducer = memberSlice.reducer;
