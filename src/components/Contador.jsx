import React, { useState } from "react";

const Contador = () => {
  const [contar, setContar] = useState(0);

  const Aumentar = () => {
    setContar(contar + 1);
  };
  const Disminuir = () => {
    setContar(contar - 1);
  };

  return (
    <div>
      <p>Contador: {contar}</p>
      <button onClick={Aumentar}>Aumentar</button>
      <button onClick={Disminuir}>Disminuir</button>
    </div>
  );
};

export default Contador;
