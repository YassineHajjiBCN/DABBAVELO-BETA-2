import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function RestProducts({ id, title, image, price, rating }) {
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
   
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>CHF</small>
          <strong>{price}</strong>
        </p>
         
      </div>

      

      <button onClick={addToBasket}>Hinzufügen</button>
    </div>
  );
}

export default RestProducts;