import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import axios from "axios";

import "./Register.css";

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const birthdate = formData.get("birthdate");
    const dni = formData.get("dni");
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          name,
          email,
          birthdate,
          nDni: Number(dni),
          username,
          password,
        }
      );
      if (response.status === 201) {
        alert("Felicidades, se creo tu usuario");

        navigate("/login");
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
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <div>
          <label htmlFor="name">Nombre de Usuario</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre de Usuario"
            minLength={3}
            required
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Example@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <input
            id="start"
            name="birthdate"
            type="date"
            min={"1900-01-01"}
            max={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
        <div>
          <label htmlFor="DNI">DNI</label>
          <input
            id="Dni"
            name="dni"
            type="number"
            placeholder="DNI"
            min={1000000}
            minLength={7}
            max={99999999}
            maxLength={8}
            required
          />
        </div>
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
