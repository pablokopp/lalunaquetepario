import React, { useState } from "react";

const Lunas = ({ data }) => {
  const [actLuna, setActLuna] = useState(0);

  return (
    <div className="container-lunas">
      <h2 className="lunas-title">
        {actLuna !== 0 ? `Luna en ${actLuna.name}` : "Elegí tu Luna"}
      </h2>
      <div className="container-lunas">
        {actLuna === 0 ? (
          data.map((luna) => (
            <div className="container-luna" onClick={() => setActLuna(luna)}>
              <img src={luna.image} />
              <h3>{luna.name}</h3>
            </div>
          ))
        ) : (
          <div className="container-luna-info">
            <img src={actLuna.image} className="" />
            <p>{actLuna.sintesis}</p>
            <button className="button-luna" onClick={() => setActLuna(0)}>
              Ver otras Lunas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lunas;
