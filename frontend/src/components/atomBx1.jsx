import { toast } from "react-hot-toast"; //! FUNCION PARA MOSTRAR NOTIFICACIONES(ALERT, NOTIF) cita(App.js)
import { UseHook } from "../context/atomCtx"; //! TRAIGO LAS FUNCIONES
import { useNavigate} from "react-router-dom"; 

export function AtomBx1({hadron}) {


    const {delXYZ} = UseHook()  //CONSTANTE USANDO UNA FUNCION/LIB PROPIA DEL DEV
    const navegante = useNavigate() //CONSTANTE USANDO UNA FUNCION/LIB PREFABRICADA

    return (
    
        <div className="NT">
            <div className="bxNT">
              <div className="tt"><h1>{hadron.tt}</h1></div>
              <img className="imgNT" src={hadron.img.EO_url} alt="" />
              <div className="des"><p>{hadron.des}</p></div>
            </div>
          </div>        
        
      )
}