import { Link } from "react-router-dom";
import {UseHook} from '../context/atomCtx';
//!! LA IMPORTANCIA DE { UseHook } y en modo CamelCase
import {AtomBx1} from "../components/atomBx1";


export function HomeXD() {
  const { XYZ } = UseHook()


  return (
    <div className="bxGenHome">

      <div className="bxlocal">
        <div>
          <h2>anuncios</h2>
        </div>
        <div>
          <h2>dolar hoy</h2>
        </div>
        <div>
          <h2>tiempo</h2>
        </div>
      </div>

      <div className="trend">
        <div className=""><img src="src/assets/stallman.jpg" alt="" /></div>
        <div className=""><img src="src/assets/murphy.png" alt="" /></div>
        <div className=""><img src="src/assets/socrates.jpg" alt="" /></div>       
        <div>
          <video controls>
            <source src="src/assets/vid/temp/vid1.mp4"/>
          </video>
        </div>
      </div>

      <div className="bxNTall">
        <div className="bxNTdeldia">
        </div>

        <div className="bxNTvar">

          {/* COMPONENTE EXPORTADO BX TIPO1 DE ATOMO */}
          {XYZ.map(hadron => (
            <AtomBx1 hadron={hadron} key={hadron._id}></AtomBx1>
          ))}

          {/* <div className="NT">
            <div className="bxNT">
              <div className="tt">
                <h1>Mundial rugby</h1>
              </div>
              <img className="imgNT" src="src/assets/stallman.jpg" alt="" />
              <div className="des">
                <p>Argentina va por un enfrentamiento desicivo ante los hombres de negro y el sueño de la gran final</p>
              </div>
            </div>
          </div>          

          <div className="NT">
            <div className="bxNT">
              <div className="tt">
                <h1>Mañana llueve</h1>
              </div>
              <img className="imgNT" src="src/assets/stallman.jpg" alt="" />
              <div className="des">
                <p>naa es mentira, el pronostico dice otra cosa pero estaremos atentos a los cambios</p>
              </div>
            </div>
          </div>     */}
      
          
        </div>
      </div>
      
      <Link to ='/dios' >creadores</Link>
    </div>
  )
}