import {v2 as cdy} from 'cloudinary';
           
cdy.config({ //? cdy EQUIVALE A cloudinary.v2
  cloud_name: 'dijj6mqj2', 
  api_key: '242713311619979', 
  api_secret: 'wkGWWooK9JQbhLnqW3Vv6gbxUTQ' 
});

// ================================================================
export const upIMGcdy = async filePath => {  
//! PASAMOS UN STRING O RUTA DEL ARCHIVO. EN ESTA OCASION UNA RUTA filePath
//! EL CUAL PROVIENE DESDE UNA CONFIGURACION EN CatCenter.js, MAS ESPECIFICAMENTE EN upload/addatom

//              LE PASO LA RUTA DEL ARCHIVO
//                                  ^^^^^^^
    return await cdy.uploader.upload(filePath, {
        folder: 'IMGtt'
    })
    
}   

// ================================================================
export const delIMGcdy = async id => {  //* 002
  return await cdy.uploader.destroy(id) //* 003 
}


//? 002 RECIBIRA EL public_id
//? 003 USARA EL MODULO DE CDY Y destroy RECIBIRA EL id CON ESTO SE LO ELIMINA DE LA NUBE
//? APLICAREMOS return PARA QUE EL MODULO QUE LO USE, PUEDA RECIBIR EL RESULTADO