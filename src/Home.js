import React from "react";
import "./Home.css";
import Product from "./Product";
import Mproduct from "./Mproduct";
import Appproduct from "./Appproduct"
import Footer from "./Footer";
import ImgShow from "./ImgShow";

import { Link, Switch, Route } from "react-router-dom";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { LinkedCamera } from "@material-ui/icons";

 

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <div className="triple-indic">
        
          <div className="one-indicas">
            
            <img className="rest-icon" src="./img/restau.png" />
            <div className="rest-text"> Wir arbeiten mit den besten Restaurants in Zürich.</div>
           </div>
         
          <div className="one-indicas">
          <img className="rest-icon" src="./img/chef.png" />
            <div className="rest-text">Die besten Köche der Stadt zu Ihren Diensten.</div>
          </div>
       
       
          <div className="one-indicas">
          <img className="rest-icon" src="./img/rider.png" />
            <div className="rest-text">Wir haben ein Team von riders bereit zu dienen</div>
          </div>
        </div>

        <ImgShow />
        <div className="title-product" >Lebensmittellieferung in Zürich</div>
        <div className="title-product-two">Lassen Sie sich von der Anzahl der verschiedenen Geschmacksrichtungen in jeder Zürich-Variante überraschen</div>
        
        
       <div className="home__row">
      <Link to="/Zaatar">        
          <Product 
            id="12321341"
            restname= "Zaatar"
            title="Der Geschmack des Nahen Ostens nur einen Schritt von Ihrem Zuhause entfernt"
            price={23}
            image="../img-prod/zaatar.png"

            restname= "Zaatar"
          />
       </Link>
       <Link to="/Delhi"> 
          <Product
            id="49538094"
            title="Das Beste aus Indien mit dem klassischen Touch von Zürich"
            price={27}
            rating={4}
            image="../img-prod/delhi.png"
   
            restname= "Delhi"
          />
       </Link>
       <Link to="/Greek"> 
          <Product  
            id="49538094"
            title="der Geschmack von griechischem Essen in der Zentralschweiz"
            price={21}
            rating={4}
            image="../img-prod/ohmygreek.png"
         
            restname= "Greek"
          /> 
       </Link>
        </div>
        <div className="title-product">Art der Gastronomie in Stadt</div>
        <div className="title-product-two-1">Die verschiedenen Gastronomien verteilen sich auf die kosmopolitischste Stadt der Welt</div>
        <div className="home__row1">
        <Link to="/Delhi"> 
          <Mproduct 
            id="4903850"
            image="../img-prod/idianfood.jpg"
            textcenter= "Indisch"
          />
          </Link>
         <Link to="/Japanes"> 
          <Mproduct
            id="23445930"
            image="../img-prod/japanfood.jpg"
            textcenter= "Japanisch"
          />
        </Link>
        <Link to="/Italian"> 
          <Mproduct     
           id="234234432"     
           image="../img-prod/italianfood.jpg"
           textcenter= "Italienisch"
          />
         </Link> 
        </div>
        <div className="home__row">
        <Link to="/Zaatar">   
          <Mproduct
            id="4903850"
            image="../img-prod/kebabfood.jpg"
            textcenter= "Lebanische"
          />
        </Link>  
        <Link to="/Burger"> 
          <Mproduct
            id="23445930"
            image="../img-prod/burgerfood.jpg"
            textcenter= "Burger"
          />
        </Link>  
        <Link to="/Pizza"> 
          <Mproduct
            id="3254354345"
            image="../img-prod/pizzafood.jpg"
            textcenter= "Pizza"
          />
        </Link>
        </div>
       

        <div className="home__row">
          <Appproduct
            id="90829332"
            textright="Fragen Sie, was Ihr Körper Sie noch schneller fragt"
            textrightsub="Laden Sie die App kostenlos herunter und bestellen Sie Ihr Essen zu Hause, wo immer Sie sind"
            image="../img-prod/App-img.png"
            imageapple="../img-prod/appstore.png"
            imagegoogle="../img-prod/googleplay.png"
          />
        </div>
          
      </div>
      
    </div>
  );
}

export default Home;
