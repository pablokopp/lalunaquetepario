import { FaArrowDown } from "react-icons/fa";
import React from "react";

const Logo = ({ img, link, altImg, cn, title }) => {
  return (
    <div className={`container-logo ${cn}`}>
      {title && (
        <div className="logo-opinion">
          <h3>{title}</h3>
          <FaArrowDown />
        </div>
      )}
      <a href={link}>
        <img src={img} alt={altImg} />
      </a>
    </div>
  );
};

export default Logo;
