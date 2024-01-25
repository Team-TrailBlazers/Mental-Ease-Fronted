import React from "react";
import axios from "axios";
import { apidomain } from "./../Utils/apiDomain";

function StripePayment() {

  const UserID = "15";
  const handleCheckout = async () => {
    console.log("Button clicked");
    axios
      .post(`${apidomain}/api/create-checkout-session`, {
        UserID: UserID,
        clientAppoinmentID: [{ id: 11 }],
      })
      .then((res) => {
        const { url } = res.data;
        console.log(url);
        window.location = url;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default StripePayment;
