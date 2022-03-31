import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

import React from "react";

const Persona = ({ nombre, iglink, weblink }) => {
  return (
    <div className="container-persona">
      <p>{nombre}</p>
      {iglink && (
        <a href={iglink} className="icon-ig" target="_blank">
          <IoLogoInstagram color="inherit" size="1.5rem" />
        </a>
      )}
      {weblink && (
        <a href={weblink}>
          <IoLogoLinkedin color="inherit" size="1.5rem" />
        </a>
      )}
    </div>
  );
};

export default Persona;
