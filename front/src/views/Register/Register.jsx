import { useNavigate } from "react-router-dom";
import "./Register.css";

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <div>
          <label htmlFor="name">Nombre de Usuario</label>
          <input id="name" type="text" placeholder="Nombre de Usuario" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input id="email" type="text" placeholder="Example@gmail.com" />
        </div>
        <div>
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <input id="birthdate" type="text" placeholder="birthdate" />
        </div>
        <div>
          <label htmlFor="DNI">DNI</label>
          <input id="Dni" type="text" placeholder="DNI" />
        </div>
        <div>
          <label htmlFor="username">Usuario</label>
          <input id="username" type="text" placeholder="Usuario" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="Contraseña" />
        </div>
        <button type="submit">Registrar</button>
        <div className="login-section">
          <h4>¿Ya tienes cuenta?</h4>
          <button
            type="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Inicia sesión
          </button>
        </div>
      </form>
    </div>
  );
}
