import axios from 'axios'

//? FUNCION PARA TRAER ATOMOS  
// export const getXYZreq = async () => await axios.get('http://localhost:4000/atoms')
export const getXYZreq = async () => await axios.get('/atoms') //EN MODO PROXY 2:30:00
//! CONFIGURACION FORZADA POR PROXY EN vite.config.js

//? FUNCION PARA CREAR ATOMOS
// export const addXYZreq = async (XYZ) => await axios.post('/addatom', XYZ)
// export const addXYZreq = async (XYZ) => await axios.post('http://localhost:4000/addatom', XYZ) 
//YA NO COMO UN JSON SINO ESTRUCTURADO COMO FORMULARIO
export const addXYZreq = async (hadron) => {
    const form = new FormData();

    for (let key in hadron) {
        form.append(key, hadron[key]);
    }

    // return await axios.post('http://localhost:4000/addatom', form, {
    return await axios.post('/addatom', form, {        
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

//? ELIMINAR ATOMOS
// export const delXYZreq = async id => await axios.delete('http://localhost:4000/delatom/' + id)
export const delXYZreq = async id => await axios.delete('/delatom/' + id)

//? REQUIRIENDO DATOS AL BACK Y RETORNARLOS EN UN CONTEXTO Y LUEGO(input, textarea, etc)
// export const getXreq = async (id) => await axios.get('http://localhost:4000/atom/' + id)
export const getXreq = async (id) => await axios.get('/atom/' + id)


//? ACTUALIZAR ATOMO
export const updateXreq = async (id, nwhadron) => 
// await axios.put(`http://localhost:4000/actatom/${id}`, nwhadron)
await axios.put(`/actatom/${id}`, nwhadron)


