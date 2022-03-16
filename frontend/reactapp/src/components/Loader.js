import React from 'react'; import ReactLoading from 'react-loading';



function Loader({type, color}) {
    
    return ( 
        <div className="contentWrap">
             <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <ReactLoading type={type} color={'#30c7a4'} height={'25px'} width={'25px'} /> 
                  </div>
        </div> 
        ) }; 
        
        
export default Loader;
