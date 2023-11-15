import {UseHook} from '../context/atomCtx';
import {NT_1_0} from "../components/nt_1_0";

export function Random() {
    const { XYZ } = UseHook()
    return (
        <div className="random">        
            <div className="randomCT">
            {/* COMPONENTE EXPORTADO BX TIPO1 DE ATOMO */}
            {XYZ.map(hadron => (
                <NT_1_0 hadron={hadron} key={hadron._id}></NT_1_0>
            ))}                       
            </div>        
        </div>
      )
}