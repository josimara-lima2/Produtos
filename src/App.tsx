import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from './Contato'
import Header from './Header'
import * as CSS from 'csstype'

const appStyle : CSS.Properties ={
  display:'flex', 
  flexDirection:'column', 
  alignItems:'center'
}

type Props = {
  children: React.ReactNode;
};

const App = ({children}:Props) => {
  
  return (
    <div style={appStyle}>
       <Header/>
      {children}
    </div>
  )
}

export default App
