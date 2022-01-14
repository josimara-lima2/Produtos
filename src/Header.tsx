import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as CSS from 'csstype'

const linkStyle:CSS.Properties = {
  textDecoration:'none',
  backgroundColor: '#ccc', 
  
  padding: '5px 15px', 
  color: '#000'
}

const divStyle:CSS.Properties = {
  width: '60%', 
  margin: '15px 0 15px 0'
}

const Header = () => {
  const rota = useLocation()

  React.useEffect(() => {
    if(rota.pathname !== "/"){
      const title = rota.pathname.normalize('NFD').replace(/[^a-zA-Zs]/g, "")
      window.document.title = `Store | ${title}`
    }else{
      window.document.title = `Store`
    }
  },[rota])

  return (
    <div style={divStyle} >
    <NavLink style={linkStyle} to="/">Produtos</NavLink>
    <NavLink style={{...linkStyle, marginLeft:'15px'}} to="/contato">Contato</NavLink>
    </div>
  )
}

export default Header
