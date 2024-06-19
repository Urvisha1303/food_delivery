import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/Storecontext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
     <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar_menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("moblie_app");
          }}
          className={menu === "moblie_app" ? "active" : ""}
        >
          Moblie app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact_us");
          }}
          className={menu === "contact_us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar_serach_icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
