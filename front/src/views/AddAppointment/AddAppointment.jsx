import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddAppointment.css";

export function AddAppointment() {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.user.id);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const date = formData.get("date");
    const time = formData.get("time");

    const selectedDate = new Date(`${date}T00:00:00`);

    if (selectedDate.getDay() === 0) {
      alert("No se pueden agendar turnos los domingos.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          date,
          time,
          userId,
        }
      );
      if (response.status === 201) {
        alert("Se creo tu turno");

        navigate("/appointments");
      }
    } catch (error) {
      const { response } = error;

      if (response.status === 400) {
        alert("Error de datos");
      } else if (response.status === 500) {
        alert("Error interno");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Registrar un turno</h2>
        <div>
          <label htmlFor="date">Fecha del turno</label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="Fecha del turno"
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Hora del turno</label>
          <input
            id="time"
            name="time"
            type="time"
            required
            step="1"
            min="07:00"
            max="21:00"
          />
        </div>
        <button type="submit">Agregar</button>
        <button
          type="button"
          onClick={() => {
            navigate("/appointments");
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
