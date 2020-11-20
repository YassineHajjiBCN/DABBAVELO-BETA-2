import React from "react";
import { Link } from "react-router-dom";
import "./Mproduct.css";
import { useStateValue } from "./StateProvider";

function Mproduct({ id, title, image, price, rating, textcenter, textrightsub, imageapple, imagegoogle}) {
  const [{ basket }, dispatch] = useStateValue();

   

  return (
    <div className="Mproduct">
      <img src={image} alt="" /> 
      <div class="middle">
       <div class="text">{textcenter}</div>
      </div>
    </div>

  );
}

export default Mproduct;
