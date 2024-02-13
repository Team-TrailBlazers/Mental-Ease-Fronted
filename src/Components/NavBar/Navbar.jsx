// import React from "react";
import "./navbar.css";
import  { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import "./navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <nav>
      <div onClick={() => setIsOpen(!isOpen)} className="burger">
        {isOpen ? <GrClose  className="close"/> : <FiAlignJustify className="bars"/>}
      </div>
      <ul className={isOpen ? 'open' : ''}>
        
        <li>
          <Link to="/" onClick={() => setIsOpen(false)} style={{color: "white"}}>Home</Link>
        </li>

        <li>
          <Link to="/stripe" onClick={() => setIsOpen(false)} style={{color: "white"}}>Stripe</Link>
        </li>

        <li>
          <Link to="/success" onClick={() => setIsOpen(false)} style={{color: "white"}}>Success</Link>
        </li>

        <li>
          <Link to="/therapists" onClick={() => setIsOpen(false)} style={{color: "white"}}>Therapists</Link>
        </li>

        <li>
          <Link to="/auth/register" onClick={() => setIsOpen(false)} style={{color: "white"}} >Register</Link>
        </li>

        <li>
          <Link to="/auth/login" onClick={() => setIsOpen(false)} style={{color: "white"}} >Login</Link>
        </li>


        <li>
        <Link to="/profile" onClick={() => setIsOpen(false)} style={{color: "white"}} >Profile</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;