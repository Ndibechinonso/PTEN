import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../HomePage/HomePage";
import { LandingPage } from "../LandingPage/LandingPage"


const RouterC = ()=>{
    <BrowserRouter>
    <Routes>
 <Route path="/home" element={HomePage} />
<Route path="/" element={LandingPage} />

</Routes>
    </BrowserRouter>
}

export default RouterC;