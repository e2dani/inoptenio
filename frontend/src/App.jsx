// import React from 'react'

import { HomeXD, AtomFmXD, SngXD } from './views'
import { Routes, Route } from 'react-router-dom'  // ? PARA CREAR MULTIPLES RUTAS
import { ProviderXYZ } from "./context/atomCtx";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div> 
      <ProviderXYZ>
        <Routes>      
          <Route path='/' element={<HomeXD />} />
          <Route path='/addy' element={<AtomFmXD />} />
          <Route path='/atomy/:id' element={<AtomFmXD />} /> {/* RUTA DEL ID, VISITANDO EL COMPONENTE AtomFmXD           */}
          <Route path='*' element={<SngXD />} />
          
        </Routes>
        <Toaster></Toaster> {/* VENTANA DE NOTIFICACIONES OCULTA, PARA toast */}
        
      </ProviderXYZ>
      
      </div>
    
  )
}

export default App



