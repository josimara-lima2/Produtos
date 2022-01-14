import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Prod from './Prod'
import  './Animation.css'
import * as CSS from 'csstype'

export interface Produto {
    id: string;
    fotos: [{titulo:string, src: string}];
    nome:string;
    preco: string;
    descricao: string;
    usuario_id:string;
}

const containerProdutosStyle: CSS.Properties = {
  display:'flex', 
  width: '60%', 
  flexWrap: 'wrap', 
  marginTop:'20px',
}
const containerItem:CSS.Properties ={marginRight: '10px', width:'300px'}

const Produto: React.FC = () => {

  const [produtos, setProdutos] = React.useState<Produto[]>()
  const [loading, setLoading] = React.useState(false)

 function getProdutos(url: string){
    setLoading(true)
     fetch(url)
     .then(response => response.json())
     .then((json) => setProdutos(json))
    setLoading(false)
  }
 
 React.useEffect(() => {
   getProdutos('https://ranekapi.origamid.dev/json/api/produto')
 },[])
 
  return (
    <div className="animeLeft" style={containerProdutosStyle}>
      {!loading && produtos && produtos.map((item) => (
        <div key={item.id} style={containerItem}>
          <NavLink to={`/produtos/${item.nome}`}>
          <img width='280px' src={item.fotos[0].src} alt={item.fotos[0].src} />
          </NavLink>
          <Routes>
            <Route path={`/produtos/${item.nome}`} element={<Prod/>}/>
          </Routes>
          <h2>{item.nome}</h2>
          
        </div>
      ))}
    </div>
  )
}
export default Produto