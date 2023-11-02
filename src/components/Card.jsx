import React from "react";

const Card = ({ data }) => {
  return (
    <div>
        <p>Hola {data.nombre}!</p>
        <p>Sabemos que tu color favorito es:</p>
        <div
            style={{
                background: data.descripcion,
                width: "100px",
                height: "100px",
                borderRadius: 5,
            }}
        >
            {data.descripcion}
        </div>

    </div>
  );
};

export default Card;