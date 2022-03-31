import Elenco from "../Elenco/Elenco";
import FooterLogos from "../FooterLogos/FooterLogos";
import HistoriaObra from "../HistoriaObra/HistoriaObra";
import React from "react";
import Sinopsis from "../Sinopsis/Sinopsis";
import Slider from "../Slider/Slider";
import Titulo from "../Titulo/Titulo";

const Obra = ({ dataObra }) => {
  const { titulo, sinopsis, elenco, logos, slider } = dataObra;
  return (
    <div className={`container-obra ${dataObra.cn}`}>
      <Titulo imgLogo={titulo.imgLogo} cn={titulo.cn} />
      <Sinopsis texto={sinopsis.texto} cn={sinopsis.cn} />
      <h2 className="obra-title">Las Lunas</h2>
      <Slider data={slider} />
      <HistoriaObra />
      <h2 className="obra-title">El Equipo</h2>
      <Elenco integrantes={elenco} />
      <FooterLogos logos={logos} />
    </div>
  );
};

export default Obra;
