import "./HomePage.scss";
import {useEffect, useCallback } from "react";
import { Alert } from "../Alert/Alert";
import { Footer } from "../Footer/Footer";
import { IntroBg } from "../IntroBg/IntroBg";
import { IntroText } from "../IntroText/IntoText";
import { NavbarComponent } from "../NavbarComponent/NavbarComponent";
import { Usp } from "../Usp/Usp";
import { Contact } from "../Contact/Contact";
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
     <li><Link to='/secret'>Secret</Link></li> 
    </div>
    </>
  );
};
