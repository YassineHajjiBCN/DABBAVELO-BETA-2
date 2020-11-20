import React from 'react';
import './Delhi.css';
import { Link, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import RestProducts from './RestProducts';


function Delhi({ id, title, image, price, rating, text, restname }) {
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
            <div className="title-restpro">Delhi</div>
            <div className="label-restpro">Asien, indischer Pazifik</div>
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
       <h1>Das Menü 1</h1>
        <ul className="food">
          <li>
          <RestProducts
            id="12321331"
            title="Combi Salat mit Samosa, Pakoras (vegetarisch) "
            price={13.50}
          />
          </li>
          <li>
          <RestProducts
            id="123999321"
            title="Idli Sambhar Gedämpfte Reiskuchen, serviert mit Sambhar (Linsen nach südindischer Art)"
            price={14.00}
          />
          </li>
          <li>
          <RestProducts
            id="123233341"
            title="Lamm Hackfleisch, gemischt mit Linsen, speziellen indischen Masalas und gegrillt"
            price={14.00}
          />
          </li>
         </ul>
         <h1>Das Menü 2</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12355541"
            title="Knusprige Waffeln, serviert mit Dal Vada (Linsen Pakora), Tamarind, Kartoffeln und Korianderchutney, dazu Chaat Masala"
            price={14.00}
          />
          </li>
          <li>
          <RestProducts
            id="123997771"
            title="Zwiebel-Kartoffel Pakora, Kartoffel- und Zwiebelscheiben, frittiert im Teig aus Kichererbsenmehl "
            price={8.50}
          />
          </li>
          <li>
          <RestProducts
            id="12387641"
            title="Paneer Tikka Marinierter Paneerwürfel und Gemüsestücke im Tandoor gegrillt "
            price={16.00}
          />
          </li>
         </ul>
         <h1>Das Menü 3</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12436341"
            title="Aloo Tikki- Snack aus Kartoffeln, Erbsen, Kräutern und verschiedenen Gewürzen "
            price={9.00}
          />
          </li>
          <li>
          <RestProducts
            id="123908971"
            title="Poulet Kebab - Gehackte Poulet Sheeks, grilliert mit speziellen indischen Gewürzen "
            price={15.00}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Lamm Samosa (2 Stück) - Frittierte Teigtaschen gefüllt mit Lammhackfleisch, Kartoffeln und Gewürzen "
            price={9.00}
          />
          </li>
        </ul>
      </div>  
      </div>
    
   );
  }



export default Delhi;