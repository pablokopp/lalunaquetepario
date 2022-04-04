import React, { useState } from "react";

const ModalLuna = ({ name, sinopsis }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="container-modaluna">
      <div>
        <h3>{name}</h3>
        <p>{sinopsis}</p>
      </div>
    </div>
  );
};

export default ModalLuna;
