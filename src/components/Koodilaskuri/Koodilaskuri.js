import React from 'react';
import './koodilaskuri.css';
import testdata from '../testdata.js';



function Koodilaskuri (props){
    let rivit = testdata.map(jotain => {
        return(
         
            <div className="rivitbox">              
                 
                <div className="tyyppi">{jotain.name}</div>
                <div className="tyyppi_info"> {jotain.pvm}</div>
                <div className="tyyppi_info"> {jotain.hours}h </div>
                <div className="tyyppi_info"> &#64; {jotain.tehot}</div>
                  <br ></br>
                </div>
                
        );
    } 


    );
    
    return(

    <div className="koodilaskuri">
      {rivit}
       
    </div> 

);
  }
  


export default Koodilaskuri;