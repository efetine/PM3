import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { logout } from "../../../store/slices/user-slice";

export function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav-group">
        <Link to="/">Home</Link>
        <Link to="/information">Informacion</Link>
        {user === null ? (
          <span className="link-disabled">Turnos</span>
        ) : (
          <Link to="/appointments">Turnos</Link>
        )}
      </div>
      <div className="nav-group">
        {user === null ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <span>{user.name}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
