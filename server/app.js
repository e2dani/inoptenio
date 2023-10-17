import express from 'express';  //* <001
import qfileupload from 'express-fileupload';   //* 002 
import cors from "cors";

import { dirname, join } from "path"; //* 007
import { fileURLToPath } from "url";    //* 007


import qpost from './routes/AtomPosts.js'  //* 003

const qx = express()    //* 004    

const __dirname = dirname(fileURLToPath(import.meta.url))
//RUTA ABSOLUTA PARA PRODUCCION Y SUBIDA A SERVIDORES (FLY, HEROKU, DIGITAL OCEAN) //* 007

//! CONFIGURACION DE CORS
// qx.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST');
//     // res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next()
// })

// TODO Middlewares  
qx.use(express.json())  
// !importante, debe usarse antes de ejecutar las rutas: qx.use(qpost) 
qx.use(qfileupload({
    useTempFiles: true,  //* 005 
    tempFileDir:'./upload_img'
}))

qx.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:4000'],
}))

// TODO Routes
qx.use(qpost)   //'qpost' USARA 'qx' 

qx.use(express.static(join(__dirname, '../frontend/dist')))

export default qx

// ARCHIVO DE CONFIGURACION DE EXPRESS
// index.js SE ENCARGARA DE LLAMARLO Y ARRANCAR EL SERVIDOR
//* 001 
//* 002    PERMITE SUBIR IMAGENES
//* 003    FLECHA A MODULO(ARCHIVO) TOOL PARA PUBLICACION DE ARTICULOS (DIRECCIONES => FUNCIONES)
//*        OTRO EJ import qpost from './routes/UsersPosts.js'  
//* 004    CONSTANTE DEL SERVIDOR
//* 005    UNA VEZ QUE SE SUBA UNA IMAGEN, NO SE MANTENGA EN MEMORIA, SINO QUE EMPIECE USANDO UNA CARPETA    

// $$BACKEND$$