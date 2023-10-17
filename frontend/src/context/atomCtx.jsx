import { useState, createContext, useContext, useEffect } from 'react'
import { 
    addXYZreq, 
    delXYZreq, 
    getXYZreq, 
    getXreq, 
    updateXreq
} from "../api/bifrost";

const MainContext = createContext()

// HOOK
export const UseHook = () => {
    const context = useContext(MainContext)
    return context
} 

// ** LOGICA DE LA ESTRUCTURA
export const ProviderXYZ = ({children}) => { //!! func USADO EN App.jsx
    // console.log('container console')
    const [XYZ, setXYZ] = useState([])  //!ELEMENTOS FUNDAMENTALES DEL PROYECTO

    // console.log(XYZ) //! MUY IMPORTANTE

    //TODO  ****************************************************************    GET
    
    const getXYZ = async () => {    //LLENAR LISTA QUE VIENE DESDE BACKEND Y EMPUJARLO EN XYZ
        const res = await getXYZreq()
        // console.log(res)
        // DESDE AQUI LA CUESTION ES QUE O QUIEN LO VA A EJECUTAR
        // setXYZ([])
        setXYZ(res.data)
    }   

    //TODO  ****************************************************************    ADD

    const addXYZ = async (hadron) => {  
        try {
            const res = await addXYZreq(hadron)
            // console.log(res)

            setXYZ([...XYZ, res.data])  //! IMP N9  
            //? A LOS ELEMENTOS YA EXISTENTES DEL AREGLO, LE AGREGO EL OBJETO NUEVO QUE RECIBI req.
        } catch (error) {
            console.error(error);
        }
    };

    //TODO  ****************************************************************    DELETE ATOM
    const delXYZ = async(id) => {
        // console.log(id) //? HASTA AQUI SOLO ESTOY ELIMINANDO DE MANERA TEORICA. PARA LA PRACTICA USAR EL bifrost.jsx
       const res = await delXYZreq(id); //PETIION DE LA PUBLICACION

        //    console.log(res)
        if (res.status===204) {
            setXYZ(XYZ.filter((hadron) => hadron._id !== id));
        }
    
    };
    //TODO  ****************************************************************    GET X1, USADO PARA ACTUALIZAR
    const getX = async (id) => {
        const res = await getXreq(id);
        // console.log(res);
        return res.data
    };

    //TODO  ****************************************************************    UPDATE ATOM
    const updateX = async (id, hadron) => {
        const res = await updateXreq(id, hadron);
        // console.log(res)
        setXYZ(XYZ.map((hadron) => (hadron._id === id ? res.data : hadron)))
        //*        1                        2                   3
        //*1    RECORRE CADA PUBLICACION
        //*2    SI EL ID DE CADA PUBLIC COINCIDE CON EL QUE ENVIE AL BACKEND
        //*     SIGNIFICA QUE ESE EL QUE ENVIE AL BACK
        //*3    LUEGO LE PASO LOS NUEVOS DATOS
    }

    //      ****************************************************************

    //?LO TRAIGO DENTRO DEL COMPONENTE
    //!ANTERIORMENTE EN HOME.JSX, LO PONGO AQUI PARA VOLVERLO GLOBAL
    useEffect(() => { //EJECUTAMOS LA FUNCION
        getXYZ()
      }, [])  //TRAEMOS EL ARRAY  

    return <MainContext.Provider value={{
        XYZ,
        // setXYZ
        //! CON ESTO YA ESTOY COMPARTIENDO LOS DATOS, CON TODOS LOS COMPONENTES QUE TENGA DENTRO
        getXYZ, /*getXYZ: getXYZ  o */
        addXYZ,
        delXYZ,
        getX,   
        updateX,        
    }}>
        {children}
    </MainContext.Provider>
}

//! MUY IMPORTANTE...
//post => hadron, PARA USAR CON ej: hadron.tt O hadron.des
//posts => XYZ

//** AMBIENTE ENVIRONMENT, DONDE TODOS LOS COMPONENTES PUEDEN ACCEDER */