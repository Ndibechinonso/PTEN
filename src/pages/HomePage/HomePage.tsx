import "./HomePage.scss";
import {useEffect, useCallback } from "react";
import { Alert } from "../../components/Alert/Alert";
import { Footer } from "../../components/Footer/Footer";
import { IntroBg } from "../../components/IntroBg/IntroBg";
import { IntroText } from "../../components/IntroText/IntoText";
import { NavbarComponent } from "../../components/NavbarComponent/NavbarComponent";
import { Usp } from "../../components/Usp/Usp";
import { Contact } from "../../components/Contact/Contact";
import { LoginPage } from "../LoginPage/LoginPage";
import { Signup } from "../Signup/Signup";
import { Link } from "react-router-dom";

export const HomePage = () => {


  return (
    <>
         <div className="top-div sticky">
          <NavbarComponent />
        </div>
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1>Welcome</h1>
     <li><Link to='/secret'>Click this link to go the your secret Page</Link></li> 
    </div>
    </>
  );
};
