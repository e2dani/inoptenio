// import express from 'express';  CUT

// import qpost from './routes/ArtPosts.js'    CUT
// FLECHA A MODULO(ARCHIVO) TOOL PARA PUBLICACION DE ARTICULOS (DIRECCIONES => FUNCIONES)
//OTRO EJ import qpost from './routes/UsersPosts.js'  

import {cnxdb} from './db.js'  

import { PORT } from "./config.js";
// VARIABLE TRAIDA DESDE config.JS DE USO GLOBAL

import qx from './app.js'

// ================================================================


// const qx = express()    CUT    //CONSTANTE DEL SERVIDOR    
cnxdb() //FLECHA A db.js 
// qx.use(qpost)   CUT   //'qpost' USARA 'qx' 



// CONEXION AL SERVIDOR
qx.listen(PORT) 
console.log('servidor en puerto', PORT)

// qx.---   =>  app.---
// $$BACKEND$$