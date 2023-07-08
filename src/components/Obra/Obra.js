import FichaTecnica from "../FichaTecnica/FichaTecnica";
import FooterLogos from "../FooterLogos/FooterLogos";
import Lunas from "../Lunas/Lunas";
import React from "react";
import Sinopsis from "../Sinopsis/Sinopsis";
import TextContainer from "../TextContainer/TextContainer";
import Titulo from "../Titulo/Titulo";
import { lalunaquetepario } from "../../data/lalunaquetepario";

const Obra = ({ dataObra }) => {
  const { titulo, sintesisYRecorrido, palabrasDirectora, logos, fichaTecnica } =
    dataObra;
  return (
    <div className={`container-obra ${dataObra.cn}`}>
      <Titulo imgLogo={titulo.imgLogo} cn={titulo.cn} />
      <Sinopsis />
      <Lunas data={lalunaquetepario.lunas} />

      <FichaTecnica fichaTecnica={fichaTecnica} />
      <TextContainer
        text={sintesisYRecorrido.text}
        title={sintesisYRecorrido.title}
      />
      <TextContainer
        text={palabrasDirectora.text}
        title={palabrasDirectora.title}
        extra={palabrasDirectora.extra}
      />
      <FooterLogos logos={logos} />
    </div>
  );
};

export default Obra;
