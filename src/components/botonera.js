import React, { useState, useEffect } from "react";
import Marca from "./marca";

export default function Botonera({ vehiculos, setearMarcaElegida }) {
  const [marcas, setMarcas] = useState([]);

  function listaDeMarcas() {
    let lista = [];
    vehiculos.forEach(x => {
      let miMarca = x.marca.toLowerCase();
      miMarca = miMarca.charAt(0).toUpperCase() + miMarca.slice(1);
      if (!lista.includes(miMarca)) {
        lista.push(miMarca);
      }
    });

    setMarcas(
      lista.map(x => ({
        id: lista.indexOf(x),
        marca: x
      }))
    );
  }

  useEffect(() => {
    listaDeMarcas();
  }, [vehiculos]);

  return (
    <div>
      <span>Marca:</span>
      <select onChange={setearMarcaElegida}>
      <option disabled selected>Elija una marca</option>
        {
          marcas.map(marca => (
          <Marca
            key={marca.id}
            marca={marca.marca}
            setearMarcaElegida={setearMarcaElegida}
          />
        ))}
      </select>
    </div>
  );
}
