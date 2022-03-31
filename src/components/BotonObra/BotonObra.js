import { Link } from "react-router-dom";
import React from "react";

const BotonObra = ({ linkA, img, altImg }) => {
  return (
    <Link to={linkA}>
      <div className="container-botonObra">
        <img src={img} alt={altImg}></img>
      </div>
    </Link>
  );
};

export default BotonObra;
