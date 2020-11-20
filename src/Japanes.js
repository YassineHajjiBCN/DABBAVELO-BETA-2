import React from 'react';
import './Japanes.css';
import { Link, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import RestProducts from './RestProducts';


function Japanes({ id, title, image, price, rating, text, restname }) {
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
            <div className="title-restpro">Yume Ramen</div>
            <div className="label-restpro">Asien - Japnische</div>
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
            id="1233321341"
            title="Edamame Junge Sojabohnen, ein klassisch japanischer Snack "
            price={6.50}
          />
          </li>
          <li>
          <RestProducts
            id="123995541"
            title="Tofu Hiyayakko Kalter Tofu mit Ingwer "
            price={9.00}
          />
          </li>
          <li>
          <RestProducts
            id="12778341"
            title="Homemade Konomono Hauseingelegtes Gemüse "
            price={9.50}
          />
          </li>
         </ul>
         <h1>Das Menü 2</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12111341"
            title="Chicken Karaage Don Knusprig mariniertes und frittiertes Hühnchen auf weissem Reis,"
            price={27.50}
          />
          </li>
          <li>
          <RestProducts
            id="123999341"
            title="Zukedon Zukedon Marinierter roher Lachs und Thunfisch, Avocado und hauseingelegter"
            price={31.50}
          />
          </li>
          <li>
          <RestProducts
            id="12322241"
            title="Spicy Beef Don Pikant gewürztes Rindshackfleisch mit Gemüse auf weissem Reis "
            price={25.50}
          />
          </li>
         </ul>
         <h1>Das Menü 3</h1>
         <ul className="food">
          <li>
          <RestProducts
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={10.00}
          />
          </li>
          <li>
          <RestProducts
            id="12323341"
            title="Gyoza Bento Japanische Teigtaschen (Gemüsefüllung) mit verschiedenen Beilagen und Reis. "
            price={31.50}
          />
          </li>
          <li>
          <RestProducts
            id="12326341"
            title="Chicken Karaage Bento Knusprig frittiertes Hähnchen mit Yuzukosho - Mayonnaise, verschiedenen Beilagen und Reis. "
            price={32.50}
          />
          </li>
        </ul>
      </div>  
      </div>
    
   );
  }



export default Japanes;