import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header" >
      <div className="hero-baner" >
      <div className="header__nav">
        
       <Link to="/">
        <img
          className="header__logo"
          src="data:image/png;base64,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"
        />
       </Link>

        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne"> {!user ? '' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Ausloggen' : 'Anmelden'}</span>
          </div>
        </Link>
      
      </div>
      <div className="boxer">
         <div className="tittel-boxer">Das beste Essen Zürich's, direkt zu dir nach Hause        
         </div>
         <div className="subtittle-boxer">Lebensmittellieferung online in Ihrer Nähe
         </div>
         <div className="search-container">
            <input type="text" placeholder="Nordstrasse 89, 8037 Zürich " name="search" /> <button className="button-search">Finden</button>
               
          </div>
         </div>
        </div> 
    </div>
    
  );
}

export default Header;
