import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointments: (state, action) => {
      const { appointments } = action.payload;

      state.appointments = appointments;
    },
    deleteAppointments: (state) => {
      state.appointments = [];
    },
    cancelAppointment: (state, action) => {
      const { appointmentId } = action.payload;

      const newAppointments = state.appointments.map((appointment) => {
        if (appointment.id === appointmentId) {
          appointment.status = "cancelled";
          return appointment;
        } else {
          return appointment;
        }
      });

      state.appointments = newAppointments;
    },
  },
});

export const { setAppointments, deleteAppointments, cancelAppointment } =
  appointmentsSlice.actions;

export const appointmentsReducer = appointmentsSlice.reducer;
