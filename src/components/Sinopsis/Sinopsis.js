import React from "react";

const Sinopsis = ({ texto, cn }) => {
  return (
    <div className={`container-sinopsis ${cn}`}>
      <p>{texto}</p>
    </div>
  );
};

export default Sinopsis;
