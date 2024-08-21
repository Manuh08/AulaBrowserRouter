import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Oferta from './Ofertas'
import Produtos from './Produtos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/oferta" element={<Oferta/>}/>
      <Route path="/produtos" element={<Produtos/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)




