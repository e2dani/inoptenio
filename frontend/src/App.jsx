// import React from 'react'

import { HomeXD,DiosXD , AtomFmXD, SngXD, Sample } from './views'
import { Routes, Route } from 'react-router-dom'  // ? PARA CREAR MULTIPLES RUTAS
import { ProviderXYZ } from "./context/atomCtx";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className='Main'>             
        <header><h2>INOPTENIO</h2></header>
        <div className="rack">
          <ProviderXYZ>
            <Routes>      
              <Route path='/' element={<HomeXD />} />
              <Route path='/dios' element={<DiosXD />} />
              <Route path='/addy' element={<AtomFmXD />} />
              <Route path='/atomy/:id' element={<AtomFmXD />} /> {/* RUTA DEL ID, VISITANDO EL COMPONENTE AtomFmXD           */}
              <Route path='*' element={<SngXD />} />

              <Route path='/sample' element={<Sample />} />            
            </Routes>
            <Toaster></Toaster> {/* VENTANA DE NOTIFICACIONES OCULTA, PARA toast */}            
          </ProviderXYZ>      
          </div>  
    </div>    
  )
}

export default App



