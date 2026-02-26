import { configureStore } from "@reduxjs/toolkit";
import { dateSliceReducer } from "./date/slice";
import { timeSliceReducer } from "./time/slice";
import { memberSliceReducer } from "./meetMember/slice";

export const store = configureStore({
  reducer: {
    date: dateSliceReducer,
    time: timeSliceReducer,
    meetMember: memberSliceReducer,
  },
});
