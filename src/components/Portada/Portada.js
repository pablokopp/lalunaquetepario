import BotonObra from "../BotonObra/BotonObra";
import Logo from "../Logo/Logo";
import React from "react";
import Sinopsis from "../Sinopsis/Sinopsis";
import ensaladailusaLogo from "../../images/ensaladailusaLogo.png";

const Portada = ({ summary }) => {
  return (
    <div className="container-portada">
      <Logo
        img={ensaladailusaLogo}
        altImg="Ensalada Ilusa"
        link="#"
        cn="portada"
      />
      <Sinopsis texto={summary.texto} cn="portada-sinopsis" />
      {summary.obras.map((obra) => (
        <BotonObra img={obra.imgBoton} altImg={obra.nombre} linkA={obra.cn} />
      ))}
      <Sinopsis texto={summary.agradecimientos} cn="portada-agradecimientos" />
    </div>
  );
};

export default Portada;
