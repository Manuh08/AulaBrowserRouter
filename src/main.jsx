import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Home from '/Home'
import Ofertas from '/Ofertas'
=======
import Home from './Home'
import Oferta from './Oferta'
>>>>>>> 0ed2b0abfc6a7ed304cee3bbb595c1b7b0052d09

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home/>}/>
      <Route path="/ofertas" element={<Ofertas/>}/>

    </Routes>
    </BrowserRouter>
=======
      <Route path="/home" element={<Home/>}/>
      <Route path="/oferta" element={<Oferta/>}/>
    </Routes>
    </BrowserRouter>
    
>>>>>>> 0ed2b0abfc6a7ed304cee3bbb595c1b7b0052d09
  </React.StrictMode>,
)




