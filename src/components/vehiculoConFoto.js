import React from 'react'

export default ({ marca, modelo, cambiarMostrarItem}) => {
  return (
<div>
      <h2>{marca} - { modelo }</h2>

      <div className="foto-box">
      <span className="foto">ACÁ VA UNA BUENA FOTO DEL AUTO</span>     
      </div>
      <button onClick={cambiarMostrarItem}>
        Volver
      </button>
</div>
  )
}