// ALMACENAMIENTO DE FUNCIONES DEL OPERADOR, PARA EL MANEJO DE ATOMOS
import Atom from "../models/atomo.js";  //!importante no colocar llaves: { Atom } from ...
import { upIMGcdy, delIMGcdy } from "../libs/cdy.js";  //? IMPORTAMOS PARA USARLO EN func ADD
import fs from "fs-extra";

//* ****************************************************************   
//* GET ONE ATOM
// export const getAtoms = (req,res) => res.send([])
export const getAtoms = async (req,res) => {
    //TODO INICIO EJECUCION DE LOGICA
    try {   //! SI OCURRE UN ERROR, VOY A CAPTURARLO EN ESTA CONDICION try_catch{...} 
            //! ATRAVES DEL USO DE CODIGOS DE ERROR
        // throw new Error('no se encuentra atomo/s') //*ERROR PERSONALIZADO   //ref0003     
        const atoms = await Atom.find()
        res.send(atoms)    
    } catch (error) {
        console.error(error)
        // return res.status(500).json('error!!')  //* ENCADENO MOTIVO DEL ERROR, EJ: ref>0003
        return res.status(500).json({message: error.message})
    }
    
} 

//* ****************************************************************    
//* AAD/AGREGO NUEVO ATOMO
// export const addAtom = (req,res) =>res.send('atomo nuevo creado') //?MODO PRUEBA   
export const addAtom = async (req, res) => {
    try {
        const {tt, des } = req.body     //? req.body ES EL OBJETO DEL CUAL QUIERO EXTRAER DATOS
        console.log(req.body)
        console.log(req.files)  //* 003 
                                //? VISTA POR CONSOLA DE files MATRIZ CON ELEM/PROP DE UN OBJETO

        //* VARIABLE PARA MANIPULACION DE OBJETOS ATRAVES DE SUS ELEN/PROP
        let QiIMG = null;

        // TODO UPLOAD EN "CDY"
        if (req.files.mtzIMG) { //MODIFICACION TEMPORAL (req.files.mtzIMG)=>ORIGINAL
            //! MUY IMPORTANTE, req.files.---, EQUIVALE AL  field_name ASIGNADO A ESTE ELEMENTO EN PARTICULAR
            //! EL CUAL SE PUEDE VER/EDITAR DESDE UN EDIT/ITERADOR DE API'S eJ: Postman, Tunderclient,etc

            const nwupIMGcdy = await upIMGcdy(req.files.mtzIMG.tempFilePath)    //* 004

            console.log(nwupIMGcdy) //!RECORDAR QUE LAS "const" CON nw U new SON RESULTADOS
                                    //? VISTA POR CONSOLA DE nwupIMGcdy MATRIZ CON ELEM/PROP DE UN OBJETO                                    
            await fs.remove(req.files.mtzIMG.tempFilePath)  //! ELIMINA EL ARCIVO TEMPORAL DE MI EQUIPO/SERVIDOR
                                                            //!TODO UPLOAD EN "CDY"    
            QiIMG = {   //? SERA AGREGADO A LA const newAtom O NUEVO ATOMO + IMAGEN
                EO_url: nwupIMGcdy.secure_url, //? nwupIMGcdy => result DE LA OBJETO CREADO PARA CDY
                EO_public_id: nwupIMGcdy.public_id 
            }            
        }

        // TODO CREACION DE UN ATOMO
        const newAtom = new Atom({tt, des, img: QiIMG})     //? CREO EL OBJETO (newAtom) Y DENTRO LE COLOCO AMBOS VALORES
        //! CAMBIO EN 30/7/23  img: QiIMG ALTERNATIVAMENTE SE PODRIA USAR image: image => image
        //! img: PROVIENE DE LA PROPIEDAD CREADA PARA ESQUEMA EN /models/atomo.js
        

        // console.log(newAtom)   //VIEW POR CONSOLA DEL JSON
        await newAtom.save() // APARTIR DE AQUI RECIEN GUARDARA EL RESULTADO EN LA BASE DE DATOS  
    
        // return res.send('recivido') //RESPUESTA OK
        return res.json(newAtom)    //ALTERNATIVA A OK, VISTA DE  newAtom COMO json    
    } catch (error) {
        console.log(error) //!PARA PODER VISUALIZAR UNA DESCRIPCION DEL ERROR POR CONSOLA
        return res.status(500).json({message: error.message})
    }
    
}


//* ****************************************************************      
//* ACTUALIZAR
// export const updAtom = (req,res) =>res.send('atomo actualizado') //?MODO PRUEBA
export const actAtom = async (req,res) => {

    // console.log(req.params) //! SOLICITO :id
    // console.log(req.body) //! SOLICITO req.body NUEVAMENTE

/* 
    const nwupdAtom = await Atom.findByIdAndUpdate(req.params.id, req.body)     //! (PRIMER PARAMETRO EN id, CUERPO DE LA PETICION EN req.body)
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
    //*HASTA AQUI SOLO ME DEVUELVE LOS DATOS QUE ACTUALIZO, NO LOS DATOS NUEVOS  
    
*/  
    try {
        const nwactAtom = await Atom.findByIdAndUpdate(req.params.id, req.body, {new: true})

        console.log(nwactAtom)
        // return res.send('recibido')
        return res.send(nwactAtom)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}


//* ****************************************************************      
//* ELIMINAR
export const delAtom = async (req,res) => {

try {
    const nwdelAtom = await Atom.findByIdAndDelete(req.params.id)    //! LO ELIMINA
    //* DEVUELVE LA PUBLICACION ELEMINADA
 
 //  if (!nwdelAtom) return res.send('no encontrada')     //! NO LO ENCUENTRA Y NO ELIMINO NADA
 //* DEJA UN STRING COMO MENSAJE, LO CUAL NO SERIA LO IDEAL
     if (!nwdelAtom) return res.sendStatus(404)
 
    console.log(nwdelAtom) //! ELIMINARA LA PUBLICACION DE LA BD, PERO NO LA IMG DE LA NUBE. 

    //delIMGcdy(nwdelAtom.EO_public_id) //! POR SI SOLO, POSIBLEMENTE DE ERROR YA QUE NO TODAS LAS PUBLICACIONES TIENEN UNA IMG
                                        //! PARA ELLO NECESITAREMOS VALIDAR
    if (nwdelAtom.img.EO_public_id) {
        delIMGcdy(nwdelAtom.img.EO_public_id)    
    }                                        

 //    return res.send('eliminado')  //! LO ELIMINA 
 //* DEJA UN STRING COMO MENSAJE, LO CUAL NO SERIA LO IDEAL

    return res.sendStatus(204)   
} catch (error) {
    return res.status(500).json({message: error.message})
}
   
}


//* ****************************************************************      
//* GET DE 1 ATOMO
// export const getAtom = (req,res) =>res.send('hello atom')
export const getAtom = async (req,res) => {
    try {
        const oneAtom = await Atom.findById(req.params.id)

        if (!oneAtom) return res.sendStatus(404)
        return res.json(oneAtom)        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

//* 003     
            // req.body    partes de un objeto
            // req.params  id, patente del objeto       
            // req.file


//* 004 
    // await upIMGcdy(req.files.mtzIMG.tempFilePath)
    //* req.files ELEM/PROP DE LA MATRIZ (mtzIMG, ^size, ^name, ^data, etc)
    //* LUEGO mtzIMG

    //* BUSCA EL ARCHIVO EN LA RUTA path Y LO SUBIRA A LA NUBE
    //* SIN EMBARGO SI NO OCURRE NADA SERA CAPTURADO POR EL "catch"



// $$BACKEND$$
