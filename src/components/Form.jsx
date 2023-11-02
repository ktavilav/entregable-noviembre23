import React, { useState, useEffect } from "react";
import Card from "./Card";

const Form = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        const nombreValido = nombre.length >= 3 && nombre[0] !== " ";
        const descripcionValida = descripcion.length >= 6;

        if (!nombreValido || !descripcionValida) {
            setCardData(null);
        } else {
            setCardData({
                nombre,
                descripcion,
            });
        }
    }, [nombre, descripcion]);

  const handleSubmit = (e) => {
        e.preventDefault();
    
        const nombreValido = nombre.length >= 3 && nombre[0] !== " ";
        const descripcionValida = descripcion.length >= 6;
    
        if (!nombreValido || !descripcionValida) {
            return;
        }
  
  };
  return (
    <div>
      <h1>Formulario de color favorito</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="descripcion">Color favorito: </label>
        <input

            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {!cardData && <p>Por favor chequea que la información sea correcta</p>}
      {cardData && <Card data={cardData} />}
    </div>
  );
};


export default Form;