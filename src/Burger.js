import React from 'react';
import './Burger.css';
import { Link, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import RestProducts from './RestProducts';


function Burger({ id, title, image, price, rating, text, restname }) {
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
            <div className="title-restpro">Ruesterei</div>
            <div className="label-restpro">Naher Osten - Libanesisch</div>
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
       <h1>Starters food1 (HyperLINKS) SAME PAGE LINKS</h1>
        <ul className="food">
          <li>
          <RestProducts
            id="12321341"
            title="Gemischte Oliven - Nocellara del belice, Sizilien & Kalamata, Griechenland "
            price={7.00}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Jahrgangs Sardine  - Cherry Tomaten, Olivenöl, Kräutersalat & getoastetes Brot "
            price={21.00}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Rindstatar Vorspeise ca. 80g - Der Rüsterei-Klassiker mit Toast "
            price={23.00}
          />
          </li>
         </ul>
         <h1>Main Dishes food2</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12321341"
            title="Süsskartoffel Curry - Süsskartoffel, Spinat, Tomate, Jasminreis, Kichererbsen, rotes Curry "
            price={24.00}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Gehacktes & Hörnli - Mit hausgemachtem Apfelmus "
            price={22.00}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Mistkratzerli ca. 450g  - Zitronengras, Sojasauce, Honig & Chili "
            price={34.50}
          />
          </li>
         </ul>
         <h1>Burger food3</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="13321341"
            title="California Cheddar & Bacon  - Rindfleisch, Cheddar, Speck, Avocado, Tomate, Zwiebel, Eisberg Salat, Cocktailsauce & Sesam Bun"
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="144399341"
            title="Chicken Burger - Poulet, Reis, Tomatensalsa, Avocado, Nachos, Cajunsauce "
            price={19.00}
          />
          </li>
          <li>
          <RestProducts
            id="123266661"
            title="Vegi Burger - Kichererbsen, Auberginen, Kartoffeln"
            price={19.00}
          />
          </li>
        </ul>
      </div>  
      </div>
    
   );
  }



export default Burger;