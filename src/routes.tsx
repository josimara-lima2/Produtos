import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Contato from './Contato'
import NaoEcontrado from './NaoEncontrado'
import Prod from './Prod'
import Produto from './Produto'

import PrivateRoutes from './PrivateRoutes'
const CustomRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<PrivateRoutes><Produto/></PrivateRoutes>}/>
      <Route path="/produtos" element={<PrivateRoutes><Produto/></PrivateRoutes>}/>
      <Route path="/produtos/:id/*" element={<PrivateRoutes><Prod/></PrivateRoutes>}/>
      <Route path="/contato" element={<PrivateRoutes><Contato/></PrivateRoutes>}/>
      <Route path="*" element={<NaoEcontrado/>}/>
    </Routes>
    </div>
  )
}

export default CustomRoutes
