import "./AppointmentItem.css";

export function AppointmentItem({ id, date, time, status }) {
  return (
    <div className="appointment-item">
      <span>{id}</span>
      <span>{date}</span>
      <span>{time}</span>
      <span>{status}</span>
    </div>
  );
}
