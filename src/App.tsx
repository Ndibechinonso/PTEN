import "./App.scss";
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent/NavbarComponent";
import { Alert } from "./components/Alert/Alert";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { Signup } from "./components/Signup/Signup";
import { Footer } from "./components/Footer/Footer";
import { NotFound} from "./components/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HomePage } from "./components/HomePage/HomePage";
import { Secret } from "./components/Secret/Secret";
import axios from "axios";
// import { refreshToken } from "./redux";
import  {RequireAuth} from "./RouteGuard/RouteGuard";
import { useCookies } from "react-cookie";

function App() {

  // const syncLogout = useCallback(event => {
  //   if (event.key === "logout") {
  //     // If using react-router-dom, you may call history.push("/")
  //     window.location.reload()
  //   }
  // }, [])
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
console.log(cookies, 'cookies');

  }, [cookies])



  return (
    <Provider store={store}>
      <>
        <Alert>
          <p>
            Are you part of the PTEN revolution? <span>Sign in</span> or{" "}
            <span>Join us</span>
          </p>
        </Alert>
        {/* <div className="top-div sticky">
          <NavbarComponent />
        </div> */}
        <div className="app">
          <BrowserRouter>
            <Routes>
              {/* <Route path="signup" element={<Signup />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="/" element={<LandingPage />} /> */}
                <Route path="/" element={<LandingPage />} />
                <Route path="signup" element={<Signup />} />
              <Route path="login" element={<LoginPage />} />
              <Route
            path="secret"
            element={
              <RequireAuth>
                <Secret />
              </RequireAuth>
            } />  
              <Route
            path="home"
            element={
                <HomePage />
            } />        
            {/* <Route path="/secret" element={RequireAuth(HomePage)} />   */}
             <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </>
    </Provider>
  );
}

export default App;
