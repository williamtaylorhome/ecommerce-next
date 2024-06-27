import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantites } = useStateContext();
  const [order, setorder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantites(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your Order!</h2>
        <p className="email-msg">Check your email for the recipt</p>
        <p className="description">
          If you habe any questions, please email{" "}
          <a className="email" href="website@support.com">
            website@support.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
