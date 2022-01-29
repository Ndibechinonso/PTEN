import React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {

    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)

    let location = useLocation();

    const backendURL = process.env.REACT_APP_BACKEND_URL;
    
    useEffect(()=>{
      fetch(`${backendURL}/users/checkToken`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res: any) => {
                if (res.status === 200) {
                  setLoading(false)
                  setRedirect(false);
                } else {
                  const error = new Error(res.error);
                  throw error;
                }
              })
              .catch(err => {
                console.error(err);
                setLoading(false)
                setRedirect(true)
            
              });
    }, [])
  
    if(loading){
      return null;
    }
    if (redirect) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
