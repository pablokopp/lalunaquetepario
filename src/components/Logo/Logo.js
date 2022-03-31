import React from "react";

const Logo = ({ img, link, altImg, cn, title }) => {
  return (
    <div className={`container-logo ${cn}`}>
      {title && <h3>{title}</h3>}
      <a href={link}>
        <img src={img} alt={altImg} />
      </a>
    </div>
  );
};

export default Logo;
