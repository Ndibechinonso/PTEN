import "./Secret.scss";
import { NavbarComponent } from "../NavbarComponent/NavbarComponent";
import { useState, useEffect, useCallback } from "react";

export const Secret = () => {
  const [message, setMessage] = useState('')
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendURL}/users/secured`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(res => res.text())
      .then(res => setMessage(res))
      .catch((err) => console.log(err)
      )
  }, [])

  return (
    <>
      <div className="top-div sticky">
          <NavbarComponent />
        </div>
  
    <div style={{ width: "100vw", height: "100vh" }}>
    { message ?  <h1>Welcome {message}</h1>
     : <h1>Loading...</h1>} </div>
    </>
  );
};
