import React from 'react'
import ReactDOM from 'react-dom/client'
import { PaginaPrincipal } from './components/PaginaPrincipal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListaApartamentos } from './components/ListaApartamentos'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/apartamentos" element={<ListaApartamentos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
