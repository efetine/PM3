import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { login } from "../../store/slices/user-slice";
import "./Login.css";

export function Login({ setView }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { user } = response.data;
        dispatch(login({ user }));

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
        <h2>Inicia sesión</h2>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Usuario"
            minLength={3}
            maxLength={12}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            minLength={6}
            required
          />
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
