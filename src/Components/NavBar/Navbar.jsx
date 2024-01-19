import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {/* <li>
          <Link to="/stripe">Stripe</Link>
        </li>
        <li>
          <Link to="/success">Success</Link>
        </li> */}
        <li>
          <Link to="/auth/register">Register</Link>
        </li>

        <li>
          <Link to="/auth/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
