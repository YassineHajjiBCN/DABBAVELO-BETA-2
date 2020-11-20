import React from "react";
import "./Footer.css";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';

function Footer({ id, title, image, textright, textrightsub, imageapple, imagegoogle, texthead, textlink}) {
  const [{ basket }, dispatch] = useStateValue();

   

  return (
    <div className="footer-ul">
      <div className="text-head">
        <div className="text-head-sub">Der ort</div>
      <Link>
       <div className="text-sublink">Zurich</div> 
       </Link>
     </div>    
     <div className="text-head">
        <div className="text-head-sub">Der Küche</div>
      <Link>
       <div className="text-sublink">Chinesisches</div> 
      </Link>
      <Link>
       <div className="text-sublink">Indisches</div> 
      </Link>
      <Link>
       <div className="text-sublink">Amerikanisches </div> 
      </Link>
      <Link>
       <div className="text-sublink">Mittlerer Osten</div>
      </Link>
      <Link>
       <div className="text-sublink">Japanisches</div>
      </Link>
      <Link>
       <div className="text-sublink">Italienisches </div>
      </Link>
      <Link>
       <div className="text-sublink">Pizza</div>
      </Link>
     </div>      
     <div className="text-head">
        <div className="text-head-sub">Meistgesucht</div>
      <Link>
       <div className="text-sublink">Gaertnerei</div> 
      </Link>
      <Link>
       <div className="text-sublink">Famiglia-tremonte</div> 
      </Link>
      <Link>
       <div className="text-sublink">Ooki Izakaya</div> 
      </Link>
      <Link>
       <div className="text-sublink">Zaatar</div> 
      </Link>
      <Link>
       <div className="text-sublink">Edomae</div> 
      </Link>
      <Link>
       <div className="text-sublink">Vees-bistro</div> 
      </Link>
      <Link>
       <div className="text-sublink">Delhi House of Best Curry</div> 
      </Link>
     </div>    
     <div className="text-head">
        <div className="text-head-sub">Über uns</div>
      <Link>
       <div className="text-sublink">wir sind</div> 
       </Link>
       <Link>
       <div className="text-sublink">Arbeite mit uns</div> 
       </Link>
       <Link>
       <div className="text-sublink">Restaurant: Mach mit</div> 
       </Link>
        
       <Link>
       <div className="text-sublink">Geschäftsbedingungen</div> 
       </Link>
     </div>  
      </div>

  );
}

export default Footer;

 