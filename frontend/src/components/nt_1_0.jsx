export function NT_1_0({hadron}) {
    
    return (
    
        <div className="nt">
            <div className="NTbx0">     
                <div className="NTdata">
                    <div className="xd">
                        <div className="imgxd">
                            <img src="public/socrates.jpg" alt="" />
                        </div>                        
                        <h1>Dani</h1>
                    </div>
                    <div className="link_nt"><a href="#">Link</a></div>
                </div>   
                
                {/* <div className="NTtt"><h1>{hadron.tt}</h1></div>                     */}
                <div className="NTimg"><img className="imgNT" src={hadron.img.EO_url} alt="" /></div>
                <div className="NTtt"><h1>{hadron.tt}</h1></div>                    
                <div className="NTdes"><p>{hadron.des}</p></div>
            </div>
        </div>            
      )
}