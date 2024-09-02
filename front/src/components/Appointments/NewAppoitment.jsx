export function NewAppoitment() {
  return (
    <div>
      <form>
        <h2>Registrar un turno</h2>
        <div>
          <label htmlFor="date">Fecha del turno</label>
          <input id="date" type="date" placeholder="Fecha del turno" />
        </div>
        <div>
          <label htmlFor="time">Hora del turno</label>
          <input id="time" type="time" placeholder="Hora del turno" />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}
