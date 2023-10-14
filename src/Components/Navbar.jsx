import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stripe">Stripe</Link>
        </li>
        <li>
          <Link to="/success">Success</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
