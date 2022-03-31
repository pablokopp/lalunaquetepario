import React from "react";

const Titulo = ({ imgLogo, cn }) => {
  return (
    <div className={`container-title ${cn}`}>
      <img src={imgLogo} alt="logo" />
    </div>
  );
};

export default Titulo;
