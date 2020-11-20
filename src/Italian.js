import React from 'react';
import './Italian.css';
import { Link, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import RestProducts from './RestProducts';


function Italian({ id, title, image, price, rating, text, restname }) {
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
    <div className="container-za">
        <div className="hero-card">
          <div className="card-pr">
            <div className="title-restpro">Familia Tremonte  </div>
            <div className="label-restpro">Mittelmeer- Italinische</div>
            <div className="time-restpro">35 min • 45 min </div>
            <div className="adress-restpro">Nordstrasse 89 8037 Zürich </div>
          </div>
        </div>

         <nav> 
          <ul  className="nav-za">
           <li><Link to="#food1">food1</Link></li>
           <li><Link to="#food2">food2</Link></li>
           <li><Link to="#food3">food3</Link></li> 
          </ul>
         </nav>
       
       <div className="foods">
       <h1>Fleisch</h1>
        <ul className="food">
          <li>
          <RestProducts
            id="12321341"
            title="Pasta al Ragu' - Rindfleisch "
            price={19.50}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Pasta alla carbonara -  Mit Guancial"
            price={19.50}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Pasta all'Amatriciana - Mit Guanciale "
            price={19.50}
          />
          </li>
         </ul>
         <h1>Vegi</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="122221341"
            title="Pesto mit einem vegetarischen Ragu"
            price={18.00}
          />
          </li>
          <li>
          <RestProducts
            id="123439341"
            title="Pasta Pomodoro-Basilico "
            price={16.50}
          />
          </li>
          <li>
          <RestProducts
            id="12323<6341"
            title="Pasta Pomodoro"
            price={14.00}
          />
          </li>
         </ul>
         <h1>Getränke</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12551341"
            title="Aranciata Amara Gazosa - 0.33L"
            price={4.00}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Aranciata rossa - 0.27L"
            price={3.50}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Chinotto - 0.27L"
            price={3.50}
          />
          </li>
        </ul>
      </div>  
      </div>
    
   );
  }



export default Italian;