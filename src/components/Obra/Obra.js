import Elenco from "../Elenco/Elenco";
import FooterLogos from "../FooterLogos/FooterLogos";
import HistoriaObra from "../HistoriaObra/HistoriaObra";
import Lunas from "../Lunas/Lunas";
import React from "react";
import Sinopsis from "../Sinopsis/Sinopsis";
import Slider from "../Slider/Slider";
import Titulo from "../Titulo/Titulo";
import { lalunaquetepario } from "../../data/lalunaquetepario";

const Obra = ({ dataObra }) => {
  const { titulo, sinopsis, elenco, logos, slider } = dataObra;
  return (
    <div className={`container-obra ${dataObra.cn}`}>
      <Titulo imgLogo={titulo.imgLogo} cn={titulo.cn} />
      <Sinopsis texto={sinopsis.texto} cn={sinopsis.cn} />
      <Lunas data={lalunaquetepario.lunas} />
      <HistoriaObra />
      <h2 className="obra-title">El Equipo</h2>
      <Elenco integrantes={elenco} />
      <FooterLogos logos={logos} />
    </div>
  );
};

export default Obra;
