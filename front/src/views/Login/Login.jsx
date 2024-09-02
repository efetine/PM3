import { useNavigate } from "react-router-dom";

export function Login({ setView }) {
  const navigate = useNavigate();

  return (
    <div>
      <form>
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
      </form>
      <div>
        <h4>Si no tienes cuenta puedes registrarte</h4>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Registrate
        </button>
      </div>
    </div>
  );
}
