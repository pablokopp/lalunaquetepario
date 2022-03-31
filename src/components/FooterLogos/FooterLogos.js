import Logo from "../Logo/Logo";
import React from "react";

const FooterLogos = ({ logos }) => {
  return (
    <div className="container-logos">
      {logos &&
        logos.map((logo) => (
          <Logo
            img={logo.img}
            link={logo.link}
            altImg={logo.altImg}
            key={logo.altImg}
            title={logo.title}
          />
        ))}
    </div>
  );
};

export default FooterLogos;
