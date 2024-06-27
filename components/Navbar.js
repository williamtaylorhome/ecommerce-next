import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCard, setShowCard, totalQuantites } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCard(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantites}</span>
      </button>

      {showCard && <Cart />}
    </div>
  );
};

export default Navbar;
