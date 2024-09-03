import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login({ setView }) {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Inicia sesión</h2>
        <div>
          <label htmlFor="username">Usuario</label>
          <input id="username" type="text" placeholder="Usuario" />
        </div>
        <div>
          <label htmlFor="password">Contrasenia</label>
          <input id="password" type="password" placeholder="Contrasenia" />
        </div>
        <button type="submit">Inicia sesión</button>
        <div className="register-section">
          <h4>Si no tienes cuenta puedes registrarte</h4>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Registrate
          </button>
        </div>
      </form>
    </div>
  );
}
