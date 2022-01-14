import React from 'react'
import { useParams } from 'react-router-dom';
import {Produto} from './Produto';
import * as CSS from 'csstype';
import './Animation.css'
const containerProdEspecificoStyle:CSS.Properties = {display: 'flex', alignItems: 'space-between' , width: '60%', flexWrap: 'wrap'}
const prodEspecificoStyle: CSS.Properties = {display: 'flex', alignItems: 'space-between', flex:1 }
const containerImagemStyle:CSS.Properties = {display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'space-between' }
const containerInfoStyle:CSS.Properties = {marginLeft: '20px',width:'30%'}
const containerPrecoStyle:CSS.Properties = {backgroundColor: '#98FB98', width: '80px', padding:'5px', textAlign:'center'}
const imgStyle:CSS.Properties = {marginTop:'20px',width:'300px'}

const Prod = () => {
  const params = useParams();

  const [produto, setProduto] = React.useState<Produto>()
  const [loading, setLoading] = React.useState(false)

  function getProdutos(url: string){
    setLoading(true)
     fetch(url)
     .then(response => response.json())
     .then((json) => setProduto(json))
    setLoading(false)
  }
 

 React.useEffect(() => {
   const prm = params.id.normalize('NFD').replace(/[^a-zA-Zs]/g, "")
   getProdutos(`https://ranekapi.origamid.dev/json/api/produto/${prm}`)
 },[])
 
  return (
  <div className="animeLeft" style={containerProdEspecificoStyle}>
      {!loading && produto && (
        <div key={produto.id} style={prodEspecificoStyle}>
          <div style={containerImagemStyle}>
            { produto.fotos && produto.fotos.map((foto) => (
            <img key={foto.src}  src={foto.src} alt={foto.titulo} style={imgStyle}/>
          ))}</div>
         <div style={containerInfoStyle}>
           <h3>{produto.nome}</h3>
           <div style={containerPrecoStyle}>{produto.preco}</div>
           <p>{produto.descricao}</p>
         </div>
          
        </div>
      )}
    </div>
  )
}

export default Prod
