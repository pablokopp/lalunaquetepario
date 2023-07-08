import React from "react";

const FichaTecnica = ({ fichaTecnica }) => {
  return (
    <div className="container-fichatecnica">
      <h3>Ficha artística</h3>
      {fichaTecnica.map((campo) => (
        <p>
          <b>{campo.trabajo}:</b> {campo.personas}
        </p>
      ))}
    </div>
  );
};

export default FichaTecnica;
