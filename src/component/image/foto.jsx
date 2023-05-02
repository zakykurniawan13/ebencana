import './foto.css'

import React from 'react'
import fotoPetunjuk from "../../assets/soplapormang.png"

export const Foto = () => {
  return (
    <div className="petunjuk-wrapper">
        <img className="petunjuk-img" src={fotoPetunjuk}/>
    </div>
    
  )
}
