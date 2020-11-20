import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating, text, restname }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        text: text,
      },
    });
  };

  return (
    
    <div className="product">
     <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="restname">{restname}</div>

      </div> 
    </div>
    
  );
}

export default Product;
