/*import React from "react";

export default ({ marca, setearMarcaElegida }) => {
  return (
    <button
      onClick={() => {
        setearMarcaElegida(marca);
      }}
    >
      {marca}
    </button>
  );
};*/



import React from "react";

export default ({ marca, setearMarcaElegida }) => {
  return (
    <option onChange={()=>{setearMarcaElegida(marca)}}value={marca}>{marca}</option> 

  );
};