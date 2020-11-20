import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Zwischensumme ({basket.length} Artikel): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Diese Bestellung enthält ein Geschenk
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"CHF"}
      />

      <button onClick={e => history.push('/payment')}>Zur Kasse</button>
    </div>
  );
}

export default Subtotal;
