import React from 'react';
import './Zaatar.css';
import { Link, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import RestProducts from './RestProducts';


function Zaatar({ id, title, image, price, rating, text, restname }) {
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
            <div className="title-restpro">Za atar</div>
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
       <h1>Kalte Mezze</h1>
        <ul className="food">
          <li>
          <RestProducts
            id="12321341"
            title="Hoummos - Kichererbsenpüree mit Sesamsauce (Bio) "
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Moutabbal - Auberginenpüree mit Sesamsauce "
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Muhammara - Paprika & Baumnusspüree"
            price={14.00}
          />
          </li>
         </ul>
         <h1>Warme Mezze</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12321341"
            title="Falafel (4 Stk.) - Frittierte Kichererbsen- (Bio), Ackerbohnen- und Kräuterbällchen "
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Batata harra - Kartoffeln mit Koriander & Knoblauch (scharf) "
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Fattet hoummos - Kichererbsen mit Joghurt, knusprigem Brot & Nüssen "
            price={14.50}
          />
          </li>
         </ul>
         <h1>Teller</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="13321341"
            title="Mezze Teller - Hoummos Moutabbal, Muhammara, Fattouche, Labneh "
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="124599341"
            title="Shawarma Poulet (CH) - Hoummos, Fattouche "
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Shawarma Lamm (CH) - Hoummos, Fattouche, Pommes Frites"
            price={14.00}
          />
          </li>
        </ul>
      </div>  
      </div>
    
   );
  }



export default Zaatar;