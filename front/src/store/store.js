import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user-slice";
import { appointmentsReducer } from "./slices/appointments-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    appointments: appointmentsReducer,
  },
});
