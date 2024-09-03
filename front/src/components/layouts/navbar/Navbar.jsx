import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/information">Informacion</Link>
      <Link to="/appointments">Turnos</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
