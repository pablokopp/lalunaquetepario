import React from "react";

const TextContainer = ({ text, title, extra }) => {
  return (
    <div className="container-texto">
      <h3>{title}</h3>
      {text.map((texto) => (
        <p>{texto}</p>
      ))}
      {extra && <p class="text-bold">{extra}</p>}
    </div>
  );
};

export default TextContainer;
