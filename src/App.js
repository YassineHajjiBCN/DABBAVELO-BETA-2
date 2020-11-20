import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import ImgShow from "./ImgShow";
import Checkout from "./Checkout";
import Login from "./Login";
import Zaatar from "./Zaatar";
import Japanes from "./Japanes";
import Italian from "./Italian";
import Pizza from "./Pizza";
import Delhi from "./Delhi";
import Greek from "./Greek";
import Burger from "./Burger";
import HeaderIn from "./HeaderIn";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StickyContainer, Sticky } from 'react-sticky';

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <HeaderIn />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <HeaderIn />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/zaatar">
           
            <HeaderIn />
            
            <Zaatar />
            <Footer />
          </Route>
          <Route path="/delhi">
            <HeaderIn />
            <Delhi />
            <Footer />
          </Route> 
          <Route path="/greek">
            <HeaderIn />
            <Greek />
            <Footer />
          </Route>
          <Route path="/japanes">
            <HeaderIn />
            <Japanes />
            <Footer />
          </Route>  
          <Route path="/italian">
            <HeaderIn />
            <Italian />
            <Footer />
          </Route>
          <Route path="/burger">
            <HeaderIn />
            <Burger />
            <Footer />
          </Route>
          <Route path="/pizza">
            <HeaderIn />
            <Pizza />
            <Footer />
          </Route>   

          <Route path="/payment">
             <HeaderIn />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
