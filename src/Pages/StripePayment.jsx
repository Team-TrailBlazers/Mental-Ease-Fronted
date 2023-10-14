import React from "react";
import axios from "axios";
import { apidomain } from "./../Utils/apiDomain";

function StripePayment() {
  const handleCheckout = async () => {
    console.log("Button clicked");
    axios
      .post(`${apidomain}/api/create-checkout-session`, {
        items: [
          { id: 1, quantity: 1 },
          { id: 2, quantity: 2 },
        ],
      })
      .then((res) => {
        const { url } = res.data;
        console.log(url);
        window.location = url;
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default StripePayment;
