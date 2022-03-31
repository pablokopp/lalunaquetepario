import Persona from "../Persona/Persona";
import React from "react";

const Trabajo = ({ trabajo, persona, cn }) => {
  return (
    <div className={`container-trabajo ${cn ? cn : ""}`}>
      <h3>{trabajo}</h3>
      <div className="container-personas">
        {persona &&
          persona.map((personita) => (
            <Persona
              nombre={personita.nombre}
              iglink={personita.iglink}
              weblink={personita.weblink}
            />
          ))}
      </div>
    </div>
  );
};

export default Trabajo;
