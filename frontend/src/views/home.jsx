import { Link } from "react-router-dom";
import {UseHook} from '../context/atomCtx';
//!! LA IMPORTANCIA DE { UseHook } y en modo CamelCase

//? COMPONENTES
// import {NT_1_0} from "../components/nt_1_0";
import { Flash } from "../components/flash";
import { Random } from "../components/random";
import { Sidebar } from "../components/sidebar";
import { Trend } from "../components/trend";


export function HomeXD() {
  const { XYZ } = UseHook() /*USAR PARA SOLICITAR DATOS*/


  return (
    <div className="rackHome">      
      <Flash></Flash>

      <div className="main_content">
        <Trend></Trend>
        <Random></Random>
      </div>
      
      <Sidebar></Sidebar>
      

      <Link to ='/dios' >creadores</Link>
    </div>
  )
}