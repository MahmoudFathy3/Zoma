import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import DropCart from "../DropCart/DropCart";

const Navbar = () => {
  const [isCart, setisCart] = useState(false);

  return (
    <nav>
      <p className="nav-logo">Gaming <span>Shop</span></p>
      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
      <div className={`nav-Carts ${isCart && "show"}`}>
        <FontAwesomeIcon icon={faBasketShopping} className="cart-icon" onClick={()=> setisCart(!isCart)} />
        <DropCart isCart={isCart} />
      </div>
    </nav>
  );
};

export default Navbar;
