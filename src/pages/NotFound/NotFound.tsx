import { Button } from "../../components/Button/Button";
import { NavbarComponent } from "../../components/NavbarComponent/NavbarComponent";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }

  return (
      <>
      <NavbarComponent />
    <div className="errorPage">
      <h1>ERROR - 404</h1>

      <h2>OOOOPS!!! PAGE NOT FOUND.</h2>
    
   <p>LINK MAY BE BROKEN OR DOESN'T EXIST</p>

    <div> <Button className="error-btn" text="GO HOME" onClick={goHome}></Button></div> 
    </div>
    </>
  );
};
