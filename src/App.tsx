import React from 'react'
import Header from './Header'
import * as CSS from 'csstype'
import Footer from './Footer'

const appStyle : CSS.Properties ={
  display:'flex', 
  flexDirection:'column', 
  alignItems:'center',
  minHeight:`calc(100vh +10em)`,
  
  marginTop: '20px',
}

type Props = {
  children: React.ReactNode;
};

const App = ({children}:Props) => {
  
  return (
    <div style={appStyle}>
       <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default App
