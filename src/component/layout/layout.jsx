import './layout.css'

import { Content } from '../content/content'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import React from 'react'

export const Layout = () => {
  return (
    <div className='container'>
        <Header/>
        <Content/>
        <Footer/>
        
        </div>
  )
}
