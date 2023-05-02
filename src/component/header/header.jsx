import './header.css'

import React from 'react'
import logo from '../../assets/Logo.png'

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-wrapper-title'>
      <img src={logo} alt="Logo" className="headerImg" />
      <div className='header-text'>LAPOR MANG </div>
      <div className='header-text' style={{fontSize: "20px"}}> Sampaikan Laporan Anda Langsung kepada Balai Besar Wilayah Sungai Sumatera VIII</div>
      </div>
        
    </div>
  )
}
