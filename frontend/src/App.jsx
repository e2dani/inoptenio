// import React from 'react'

import { HomeXD,DiosXD , AtomFmXD, SngXD } from './views'
import { Routes, Route } from 'react-router-dom'  // ? PARA CREAR MULTIPLES RUTAS
import { ProviderXYZ } from "./context/atomCtx";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className='vwMain'> 
      <header>
        <h3>inoptenio</h3>
      </header>
      <div className='bxGen'>
        <ProviderXYZ>
          <Routes>      
            <Route path='/' element={<HomeXD />} />
            <Route path='/dios' element={<DiosXD />} />
            <Route path='/addy' element={<AtomFmXD />} />
            <Route path='/atomy/:id' element={<AtomFmXD />} /> {/* RUTA DEL ID, VISITANDO EL COMPONENTE AtomFmXD           */}
            <Route path='*' element={<SngXD />} />
            
          </Routes>
          <Toaster></Toaster> {/* VENTANA DE NOTIFICACIONES OCULTA, PARA toast */}
          
        </ProviderXYZ>
      </div>  
    </div>
    
  )
}

export default App



