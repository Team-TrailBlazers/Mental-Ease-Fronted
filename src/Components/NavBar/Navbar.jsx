import { useState } from "react";
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
          <Link to="/home" onClick={() => setIsOpen(false)} style={{color: "white"}}>Home</Link>
        </li>
        <li>
          <Link to="/stripe" onClick={() => setIsOpen(false)} style={{color: "white"}}>Stripe</Link>
        </li>
        <li>
          <Link to="/success" onClick={() => setIsOpen(false)} style={{color: "white"}}>Success</Link>
        </li>
        <li>
          <Link to="/auth/register" onClick={() => setIsOpen(false)} style={{color: "white"}} >Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;