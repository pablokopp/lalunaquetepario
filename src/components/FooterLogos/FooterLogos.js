import Logo from "../Logo/Logo";
import LogoAlternativa from "../Logo/LogoAlternativa";
import React from "react";

const FooterLogos = ({ logos, logoalternativa, logoalternativalunita }) => {
  return (
    <div className="container-logos">
      {logos && <h2>Nos acompañan</h2>}
      {logos &&
        logos.map((logo) => (
          <Logo
            img={logo.img}
            link={logo.link}
            altImg={logo.altImg}
            key={logo.altImg}
            title={logo.title}
            cn={logo.cn}
          />
        ))}
      <LogoAlternativa
        img={logoalternativa.img}
        link={logoalternativa.link}
        altImg={logoalternativa.altImg}
        key={logoalternativa.altImg}
        title={logoalternativa.title}
        obra={logoalternativa.obra}
      />
      <LogoAlternativa
        img={logoalternativalunita.img}
        link={logoalternativalunita.link}
        altImg={logoalternativalunita.altImg}
        key={logoalternativalunita.altImg}
        title={logoalternativalunita.title}
        obra={logoalternativalunita.obra}
      />
    </div>
  );
};

export default FooterLogos;
