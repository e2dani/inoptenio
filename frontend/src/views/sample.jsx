import { Link } from "react-router-dom";
import { NT_1_0 } from "../components/nt_1_0";
import {UseHook} from '../context/atomCtx';
//!! LA IMPORTANCIA DE { UseHook } y en modo CamelCase
// import {AtomBx1} from "../components/atomBx1";


export function Sample() {
  const { XYZ } = UseHook()


  return (
    <div className="rackSample">     
      {/* COMPONENTE EXPORTADO BX TIPO1 DE ATOMO */}
      {XYZ.map(hadron => (
            <NT_1_0 hadron={hadron} key={hadron._id}></NT_1_0>
          ))}
      <Link to ='/dios' >creadores</Link>
    </div>
  )
}