import  React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { IoMdList} from 'react-icons/io';
import { IoIosBrush} from 'react-icons/io';
import './menu.css';

function Menu (props){
    return(
   
   
   <div className="menu">  
   
     <Link to="/Koodilaskuri"> <div className="nappi"> <IoMdList /> </div> </Link>
     <Link to="./Add">  <div className="nappi"> <IoIosAdd /></div></Link>
     <Link to="/Graafi">  <div className="nappi"> <IoIosBrush /> </div></Link>
   
   </div>









   
    );
}   



export default Menu;