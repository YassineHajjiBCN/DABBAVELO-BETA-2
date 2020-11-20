import React from 'react';
import './Greek.css';
import { Link, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import RestProducts from './RestProducts';


function Greek({ id, title, image, price, rating, text, restname }) {
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
            <div className="title-restpro">OH MY GREEK!</div>
            <div className="label-restpro">Mittelmeer, Griechisch</div>
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
          <li className="rest-prod-li">
          <RestProducts
            id="12321341"
            title="Tzatziki, Serviert mit Pitabrot "
            price={10.00}
          />
          </li>
          <li className="rest-prod-li">
          <RestProducts
            id="123999341"
            title="Tirokafteri, Feta-Paprika Dip, serviert mit Pitabrot "
            price={10.00}
          />
          </li>
          <li className="rest-prod-li">
          <RestProducts
            id="12326341"
            title="Melitzanosalata, Auberginen-Dip, serviert mit Pitabrot "
            price={14.00}
          />
          </li>
         </ul>
         <h1>Das Menü 2</h1>
         <ul className="food">
          <li className="rest-prod-li">
          <RestProducts
            id="12321341"
            title="Portion Pommes Frites mit Tzatziki "
            price={10.00}
          />
          </li>
          <li className="rest-prod-li">
          <RestProducts
            id="123999341"
            title="Portion Pommes Frites mit Feta und Oregano"
            price={11.00}
          />
          </li>
          <li className="rest-prod-li"> 
          <RestProducts
            id="12326341"
            title="Zucchini-Fritters (5 Stück) "
            price={12.00}
          />
          </li>
         </ul>
         <h1>Das Menü 3</h1>
         <ul className="food">
          <li className="rest-prod-li">
          <RestProducts
            id="12321341"
            title="Tomaten, Gurken, Peperoni, Kalamata-Oliven, Feta, Zwiebeln, Oregano, an Olivenöl"
            price={14.00}
          />
          </li>
          <li className="rest-prod-li">
          <RestProducts
            id="123999341"
            title="Lattich mit feingehackten Frühlingszwiebeln und Dill an Zitronendressing. Extra Zutaten nach Wahl:"
            price={12.00}
          />
          </li>
          <li className="rest-prod-li">
          <RestProducts
            id="12326341"
            title="Lattich, Cherrytomaten, Gurken, Graviera-Käsesplitter, auf Wunsch mit Gyros oder Halloumi, an Honigdressing."
            price={14.00}
          />
          </li>
        </ul>
      </div>  
      </div>
    
   );
  }



export default Greek
 