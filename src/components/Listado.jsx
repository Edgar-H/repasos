import React, { useState } from "react";

const Listado = () => {
  const [numeros, useNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  return (
    <div className="container bg-red">
      <ul className="list-group">
        {numeros.map((n, i) => (
          <li
            key={i}
            className="list-group-item bg-success fs-5 fw-bold text-light"
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listado;
