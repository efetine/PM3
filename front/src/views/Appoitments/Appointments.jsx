import axios from "axios";
import { useEffect, useState } from "react";

import "./Appointments.css";
import { AppointmentItem } from "../../components/Appointments/AppointmentItem";
import { Banner } from "../../components/Banner/Banner";

// import { useState } from "react";
export function Appointments() {
  // const [view, setView] = useState("Appoitment");

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fn = async () => {
      // const response = await fetch(
      //   "http://localhost:3000/appointments?userId=4"
      // );

      // const body = await response.json();

      const response = await axios.get(
        "http://localhost:3000/appointments?userId=4"
      );

      setAppointments(response.data.appointments);
    };

    fn();
  }, []);

  return (
    <div>
      <Banner />
      <div>
        <h1>Appointments</h1>
        <button id="add-appointment">Agregar turno</button>
        <div className="appointments-list">
          {appointments.map((appointment) => {
            return (
              <AppointmentItem
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                status={appointment.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* /* {" "}
{view === "viewAppoitments" ? (
  <viewAppoitments setView={setView} />
) : view === "UserAppoitments" ? (
  <UserAppoitments setView={setView} />
</> */
