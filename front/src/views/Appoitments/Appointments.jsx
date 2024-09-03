import axios from "axios";
import "./Appointments.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Appointments.css";
import { Banner } from "../../components/Banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelAppointment,
  setAppointments,
} from "../../store/slices/appointments-slice";

export function Appointments() {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.user.id);
  const appointments = useSelector((state) => state.appointments.appointments);
  console.log({ appointments });
  const dispatch = useDispatch();

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/appointments/cancel/${appointmentId}`
      );
      if (response.status === 200) {
        alert("Se cancelo su turno");

        dispatch(
          cancelAppointment({
            appointmentId,
          })
        );
      }
    } catch (error) {
      const { response } = error;

      if (response.status === 500) {
        alert("Error interno");
      }
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await axios.get(
        `http://localhost:3000/appointments?userId=${userId}`
      );

      dispatch(
        setAppointments({
          appointments: response.data.appointments,
        })
      );
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointments-page">
      <Banner />
      <div className="appointments-content">
        <h1>Mis turnos</h1>
        <button
          onClick={() => {
            navigate("/appointments/add");
          }}
          id="add-appointment"
        >
          Agregar turno
        </button>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.status}</td>
                <td>
                  <button
                    className="cancel-button"
                    disabled={appointment.status === "cancelled"}
                    onClick={() => handleCancelAppointment(appointment.id)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
