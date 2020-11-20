import React from "react";
import "./Appproduct.css";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';

function Appproduct({ id, title, image, textright, textrightsub, imageapple, imagegoogle}) {
  const [{ basket }, dispatch] = useStateValue();

   

  return (
    <div className="Appproduct">
      <img src={image} alt="" /> 
      <div className="middlet">
       <div className="textright">{textright}</div>
       <div className="textright-sub">{textrightsub}</div>
       <div className="image-app">
         <Link to="/">
         <img src={imageapple} alt="" /> 
        </Link>
        <Link to="/">
         <img src={imagegoogle} alt="" /> 
        </Link>
       </div>
      </div>
    </div>
  );
}

export default Appproduct;
