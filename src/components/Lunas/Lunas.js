import React, { useState } from "react";

import ScrollUpFixer from "../ScrollUpFixer/ScrollUpFixer";

const Lunas = ({ data }) => {
  const [actLuna, setActLuna] = useState(0);

  return (
    <ScrollUpFixer actLuna={actLuna} setActLuna={setActLuna}>
      <div className="container-lunas" id="luna-scroll">
        <h2 className="lunas-title">
          {actLuna !== 0 && actLuna !== 1
            ? `Luna en ${actLuna.name}`
            : "Elegí tu Luna"}
        </h2>
        <div className="container-lunas">
          {actLuna === 0 || actLuna === 1 ? (
            data.map((luna) => (
              <div className="container-luna" onClick={() => setActLuna(luna)}>
                <img src={luna.image} />
                <h3>{luna.name}</h3>
              </div>
            ))
          ) : (
            <div className="container-luna-info">
              <img src={actLuna.image} className="" alt={actLuna.name} />
              <p>{actLuna.sintesis}</p>
              <h4>Refugio</h4>
              <p>{actLuna.refugio}</p>
              <h4>Desafíos</h4>
              <p>{actLuna.desafio}</p>
              <h4>Talentos</h4>
              <p>{actLuna.talento}</p>
              <h4>Extracto de la obra</h4>
              {actLuna.extractoObra ? <p>{actLuna.extractoObra}</p> : null}
              {actLuna.dialogo
                ? actLuna.dialogo.map((dialog) => <p>{dialog}</p>)
                : null}
              <h4>Mensaje a su chupete</h4>
              <p>{actLuna.chupete}</p>
              <button className="button-luna" onClick={() => setActLuna(1)}>
                Ver otras Lunas
              </button>
            </div>
          )}
        </div>
      </div>
    </ScrollUpFixer>
  );
};

export default Lunas;
