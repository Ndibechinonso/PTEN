import "./App.scss";
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent/NavbarComponent";
import { Alert } from "./components/Alert/Alert";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Signup } from "./pages/Signup/Signup";
import { Footer } from "./components/Footer/Footer";
import { NotFound} from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HomePage } from "./pages/HomePage/HomePage";
import { Secret } from "./pages/Secret/Secret";
import axios from "axios";
// import { refreshToken } from "./redux";
import  {RequireAuth} from "./RouteGuard/RouteGuard";
import { useCookies } from "react-cookie";

function App() {

  return (
    <Provider store={store}>
      <>
        <Alert>
          <p>
            Are you part of the PTEN revolution? <span>Sign in</span> or{" "}
            <span>Join us</span>
          </p>
        </Alert>
        <div className="app">
          <BrowserRouter>
            <Routes>
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
