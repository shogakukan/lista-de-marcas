import React from "react";
import VehiculoListItem from "./vehiculoListItem";

export default ({ vehiculos, marcaElegida, cambiarMostrarItem }) => {
  return (
    <ul>
      {vehiculos
        .filter(
          vehiculo =>
            vehiculo.marca.toLowerCase() === marcaElegida.toLowerCase()
        )
        .map(vehiculo => (
          <VehiculoListItem
            key={vehiculo.id}
            marca={vehiculo.marca}
            modelo={vehiculo.modelo}
            cambiarMostrarItem={() => cambiarMostrarItem(vehiculo.id)}
          />
        ))}
    </ul>
  );
};
