import { FaArrowDown } from "react-icons/fa";
import React from "react";

const LogoAlternativa = ({ img, link, altImg, cn, title, obra }) => {
  return (
    <div className="container-logo--alternativa">
      {title && (
        <div className="logo-opinion">
          <h3>
            {title}
            <br /> {obra}
          </h3>
          <FaArrowDown />
        </div>
      )}
      <a href={link}>
        <img src={img} alt={altImg} />
      </a>
    </div>
  );
};

export default LogoAlternativa;
