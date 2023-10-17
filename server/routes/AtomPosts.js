import { Router } from "express";   //enrutador principal
const qrouter = Router()    //nombre para el uso de la funcion Router()

// import { getAtoms } from "../operador/CatCenter.js";

// import { addAtom } from "../operador/CatCenter.js";

// import { updAtom } from "../operador/CatCenter.js";

// import { delAtom } from "../operador/CatCenter.js";

// import { getAtom } from "../operador/CatCenter.js";

import { getAtoms,addAtom, actAtom, delAtom,getAtom } from "../operador/CatCenter.js";
//  !NO OLVIDAR .js

//TODO  FUNCIONES:

qrouter.get('/atoms', getAtoms)   //array de posteos

qrouter.post('/addatom', addAtom)    //add de posteos

// qrouter.put('/atom', updAtom)     //update de  posteo    //?MODO PRUEBA
qrouter.put('/actatom/:id', actAtom) 
// PARA LLAMAR A UN OBJETO O ARTICULO PUNTUAL 
//! POR EJEMPLO :/atom/12345678  --> ESTE EL EL VALOR DE params 
//* REF EN CatCenter.js 

// qrouter.delete('/atom', delAtom)  //eliminar posteo     //?MODO PRUEBA
qrouter.delete('/delatom/:id', delAtom)

qrouter.get('/atom/:id', getAtom)    //atomo individual

export default qrouter


// $$BACKEND$$