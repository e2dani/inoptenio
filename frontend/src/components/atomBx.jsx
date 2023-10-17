import { toast } from "react-hot-toast"; //! FUNCION PARA MOSTRAR NOTIFICACIONES(ALERT, NOTIF) cita(App.js)
import { UseHook } from "../context/atomCtx"; //! TRAIGO LAS FUNCIONES
import { useNavigate} from "react-router-dom"; 

export function AtomBx({hadron}) {

  const {delXYZ} = UseHook()  //CONSTANTE USANDO UNA FUNCION/LIB PROPIA DEL DEV
  const navegante = useNavigate() //CONSTANTE USANDO UNA FUNCION/LIB PREFABRICADA

  //! ================================================================

  //! ELEM/OBJ  MARCO DE ELIMINACION DE ATOMO
  const HDRdel = (id)=> { //? HDR DE handler
    toast((t) => (  //! AQUI LE PASAMOS UNA FUNCION, ES LA QUE VA A RETORNAR UN ELEMENTO QUE MOSTRAR 
      <div>
        <p>seguro queres eliminarlo? 
          <strong>{id}</strong>
        </p>
        <div>
          {/* //? CAPTURAMOS UNA RESPUESTA CON LOS BUTTON */}
          <button 
            onClick={() => {
              delXYZ(id);
              toast.dismiss(t.id) //FUNCION PARA QUITAR LA NOTIFICACION ALERT DE ELIMINAR
              }
            }
            
            >            
            eliminar
          </button>
          {/*                //>!APARTIR DE AQUI SE EJECUTA LA FUNCION, COMO PARAMETRO EL (id) */}
          <button
          onClick={() =>  toast.dismiss(t.id)}
          >cancelar</button>
        </div>
      </div>
    ))
  }
  //! ================================================================

  return (
    
    <div>      
      <button onClick={() => navegante(`/atomy/${hadron._id}`)}>update</button> {/* //! ACTUALIZAR ATOMO */}
      <div className="bg-zing-800 text-black rounded-sm shadow-md shadow-black hover-bg-zing-700 hover:cursor-pointer">
          <h3>
              {hadron.tt} 
          </h3>
          
          <p>
          {hadron.des}
          </p>

          <button className="bg-red-200"  
          // onClick={() =>  toast.success('hello')}
          onClick={() => HDRdel(hadron._id)}  //! FUNCION ELIMINAR, CUANDO SE LLAME. ENVIARA UN _id A "HDRdel" DE ARRIBA
          >
            eliminar
          </button>{/* //! ELIMINAR ATOMO */}
          {/* {hadron.imgXD && <img src={hadron.imgXD.url} />}  */}
          {hadron.img && <img src={hadron.img.EO_url} />} 
          {/* //!MUY MPORTANTE (nivel 10')AQUI UTILIZAMOS LOS DATOS DEL "response"(res) */}
      </div>  
    </div>  
    
  )
}

// export default atomBx    YA NO EXPORTAMOS DE ESTA MANERA Y LO HACEMOS DE MANERA GLOBAL, ARRIBA

// Warning: <atomBx /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
//     at atomBx
//     at div
//post => hadron, para usar con ej: hadron.tt o hadron.des



//? CONFIGURACION DEL BOX DONDE SE MOSTRARA CADA ATOMO NUEVO
