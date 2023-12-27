import React from "react";
import "./Subtotal.css";


// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format"; // Import CurrencyFormat from "react-currency-format"

 
function Subtotal() {
    // const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal




