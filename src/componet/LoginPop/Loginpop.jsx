import React, { useState } from "react";
import "./Loginpop.css";
import { assets } from "../../assets/assets";

const Loginpop = ({ setShowLogin }) => {
  const [cureentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-continer">
        <div className="login-popup-title">
          <h2>{cureentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {cureentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" id="" required />
          )}
          {/* <input type="text" placeholder="Your Name" id="" required/> */}
          <input type="email" placeholder="Your Email" id="" required />
          <input type="password" placeholder="Password" id="" required />
        </div>
        <button>
          {cureentState === "sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy Policy.</p>
        </div>
        {cureentState === "Login" ? (
          <p>
            Create a New Account? <span onClick={()=> setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account <span onClick={()=> setCurrentState("Login")}>Login here</span>
          </p>
        )}
        {/* <p>Create a New Account? <span>Click here</span></p>
        <p>Already have an account <span>Login here</span></p> */}
      </form>
    </div>
  );
};

export default Loginpop;
