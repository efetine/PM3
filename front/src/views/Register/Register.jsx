import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
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
        <h4>Ya tienes cuenta?</h4>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Inicia sesion
        </button>
        {/* <button>
          <Link to="/login">Inicia sesion</Link>
        </button> */}
      </div>
    </div>
  );
}
