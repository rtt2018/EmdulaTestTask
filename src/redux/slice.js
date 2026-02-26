import { configureStore, createSlice } from "@reduxjs/toolkit";
import { setSelectedDate } from "./date/slice";

const initialState = {
    date: setSelectedDate,
    time: ,
    meetMember: ,

  
};



const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
