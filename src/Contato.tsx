import React from 'react'
import contatoImg from './img/contato.jpg';
import  './Animation.css'
import * as CSS from 'csstype'

const containerStyle: CSS.Properties = {
  display: 'flex', 
  alignItems: 'space-between' , 
  width: '60%', 
  flexWrap: 'wrap'
}

const imgContainerStyle:CSS.Properties = {
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'start', 
  alignItems: 'start' 
}

const contatoStyle: CSS.Properties = {marginLeft: '20px',width:'30%'}

const Contato = () => {
  return (
    <div className="animeLeft" style={containerStyle}>
          <div style={imgContainerStyle}>
            <img  width='300px' src={contatoImg} alt="contatoImg"/>
          </div>
         <div style={contatoStyle}>
           <h3>&nbsp;&nbsp;&nbsp;&nbsp;Entre em contato</h3>
           <p>__&nbsp;&nbsp;Josimara_lima88@hotmail.com</p>
           <p>__&nbsp;&nbsp;84981180730</p>
         </div> 
        </div>
  )
}

export default Contato
