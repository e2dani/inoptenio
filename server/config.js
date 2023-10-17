// ARCHIVO DE CARGA DE VARIABLES DE ENTORNO
//CENTRALIZADOR DE TODAS LAS VARIABLES DE ENTORNO
import  dotenv  from 'dotenv';

dotenv.config()

// export const MONGODB_URI = process.env.MONGODB_URI 
// export const PORT = process.env.PORT

// export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://carpincho:fCmAjKEfbZjYTi8L@abc0012.mssi07h.mongodb.net/?retryWrites=true&w=majority"
export const PORT = process.env.PORT || 4000
// AGREGO (|| => 0) OPCION POR DEFECTO POR SI NO EXISTIERA UNA VARIABLE DE ENTORNO PARA ESTE CASO


// $$BACKEND$$
