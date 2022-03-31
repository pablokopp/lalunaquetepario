import React from "react";
import Trabajo from "../Trabajo/Trabajo";

const Elenco = ({ integrantes }) => {
  return (
    <div className="container-elenco">
      {integrantes.map((integrante) => (
        <Trabajo
          persona={integrante.integrante}
          trabajo={integrante.trabajo}
          cn={integrante.cn}
          key={integrante.trabajo}
        />
      ))}
    </div>
  );
};

export default Elenco;
