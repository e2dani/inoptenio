import { Link } from "react-router-dom";
import {UseHook} from '../context/atomCtx';
//!! LA IMPORTANCIA DE { UseHook } y en modo CamelCase

//? COMPONENTES
import {NT_1_0} from "../components/nt_1_0";
import { Flash } from "../components/flash";
import { Random } from "../components/random";


export function HomeXD() {
  const { XYZ } = UseHook()


  return (
    <div className="rackHome">      
      <Flash></Flash>
      <Random></Random>
      
      <Link to ='/dios' >creadores</Link>
    </div>
  )
}