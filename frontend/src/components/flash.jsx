import { toast } from "react-hot-toast"; //! FUNCION PARA MOSTRAR NOTIFICACIONES(ALERT, NOTIF) cita(App.js)
import { useNavigate} from "react-router-dom"; 

export function Flash() {

    return (
        <div className="flash">
            <div className="flashCT">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>      
      )
}