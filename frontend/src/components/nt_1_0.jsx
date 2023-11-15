export function NT_1_0({hadron}) {
    
    return (
    
        <div className="nt">
            <div className="NTbx0">        
                {/* <div className="NTtt"><h1>{hadron.tt}</h1></div>                     */}
                <div className="NTimg"><img className="imgNT" src={hadron.img.EO_url} alt="" /></div>
                <div className="NTtt"><h1>{hadron.tt}</h1></div>                    
                <div className="NTdes"><p>{hadron.des}</p></div>
            </div>
        </div>            
      )
}