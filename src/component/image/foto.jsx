import './foto.css'

import React from 'react'
import fotoSop from "../../assets/SopEbencana.jpg"

export const Foto = () => {
  return (
    <div className="petunjuk-wrapper">
        <img className="petunjuk-img" src={fotoSop}/>
    </div>
    
  )
}
