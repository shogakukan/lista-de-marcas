import React, { useState, useEffect } from "react";
import VehiculoConFoto from "./components/vehiculoConFoto";
import Botonera from "./components/botonera";
import ListaVehiculos from "./components/listaVehiculos";

import "./style.css";

export default function App() {
  const [vehiculos, setVehiculos] = useState([]);

  // const [marcas, setMarcas] = useState([]);

  const [marcaElegida, setMarcaElegida] = useState("");

  const [mostrarItem, setMostrarItem] = useState(null);

  useEffect(() => {
    buscarVehiculos();
    return () => {};
  }, []);

  function buscarVehiculos() {
    fetch("https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setVehiculos(data);
      });
  }

  function cambiarMostrarItem(key) {
    setMostrarItem(vehiculos.find(x => x.id === key));
  }

  function mostrarMarca(marca) {
    setMarcaElegida(marca.target.value);
    setMostrarItem(null);
  }

  return (
    <div>
    <h1>Galería de autos</h1>
      <Botonera vehiculos={vehiculos} setearMarcaElegida={mostrarMarca} />
      {mostrarItem ? (
        <VehiculoConFoto
          key={mostrarItem.id}
          marca={mostrarItem.marca}
          modelo={mostrarItem.modelo}
          cambiarMostrarItem={() => cambiarMostrarItem(null)}
        />
      ) : (
        <ListaVehiculos
          vehiculos={vehiculos}
          marcaElegida={marcaElegida}
          cambiarMostrarItem={cambiarMostrarItem}
        />
      )}
    </div>
  );
}
