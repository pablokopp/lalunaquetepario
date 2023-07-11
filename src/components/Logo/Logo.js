import React from "react";

const Logo = ({ img, link, altImg, cn, title }) => {
  return (
    <div className={`container-logo ${cn}`}>
      {img ? (
        <a href={link}>
          <img src={img} alt={altImg} />
        </a>
      ) : (
        <a className="link-logo" href={link}>
          {title}
        </a>
      )}
    </div>
  );
};

export default Logo;
