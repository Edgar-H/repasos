import React, { useState } from "react";

const Formulario = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState("");

  const Validar = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("El campo nombre esta vacio");
      return;
    }
    if (!email) {
      console.log("El campo del correo electronico esta vacio");
      return;
    }
    console.log("Se envio");
  };
  return (
    <div className="mb-3">
      <form onSubmit={Validar} className="form-group">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre apellido"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
