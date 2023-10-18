import {UseHook} from '../context/atomCtx'
//!! LA IMPORTANCIA DE { UseHook } y en modo CamelCase

import { Link } from "react-router-dom";
//? CAMBIAR DE PAGINA SIN REFRESCAR Y/O CONSERVAR DATOS

import {AtomBx} from "../components/atomBx";

export function DiosXD() {

  const { XYZ } = UseHook() //IMPORTANTE PARA ENTREGAR LA LONGITUD/CANTIDAD DE ATOMOS

  

  const renderMain = () => {
    if (XYZ.length === 0) return (
      <div>
        <h1>no hay atomos</h1>
      </div>
    );

    return (
      <div>
        {/* HomeXD diario */}
        {XYZ.map(hadron => (
          <AtomBx hadron={hadron} key={hadron._id}></AtomBx>
        ))}

        {/* <Link to='/add'>ir a add</Link> */}
        {/* <button className="bg-sky-500 hover:bg-sky-700" onClick={() => setMks([1,2,3])}>   */}
        {/*SE EJECUTA CUANDO DOY CLICK       */}
          {/* add */}
        {/* </button>
        <p className="text-blue-600">hola mundo</p> */}
      </div>
    );
  }

  return (
    <div className='bxGenDios'>
      <div className='bxAtomStatus'>
        <h1>cantidad de atomos ({XYZ.length})</h1>
        <Link to ='/addy' >Crear nuevo atomo</Link>
      </div>

      
      {renderMain()}
      {/* RETORNA EL ESTADO DE ATOMOS. RENDERIZARA Y CONSERVARA UNA PORCION DEL ADD */}
      
    </div>
    
  )
}

//!! EL OBJETIVO DELEGAR LA EXPORTACION DE FUNCIONES Y PARAMETROS  A , view/index.js 
//!! Y NO FICHERO POR SEPARADO
// export default home 