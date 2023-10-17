import mongoose from 'mongoose'
import { MONGODB_URI } from "./config.js"   //!usar xxx.js para que tome el modulo

// ================================================================>
// import dotenv from "dotenv";
    
// dotenv.config()
// <================================================================

export async function cnxdb() {  //FUNCION PARA LA CONEXION A artdb
    try {
        // const db = await mongoose.connect("mongodb://localhost/inopteniodb")
        const db = await mongoose.connect(MONGODB_URI)
        // !PARA CONECTAR LA VARIALE DE ENTORNO SIEMPRE process.env
        console.log('conectado a ', db.connection.name)
    } catch (error) {
        console.error(error)
    }
}


// $$BACKEND$$