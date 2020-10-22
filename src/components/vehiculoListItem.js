import React from "react";

export default ({ marca, modelo, cambiarMostrarItem }) => {
  return (
    <li>
      <a onClick={cambiarMostrarItem}>
        {marca} - {modelo}
      </a>
    </li>
  );
};
