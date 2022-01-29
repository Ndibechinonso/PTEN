import './LandingPage.scss'
import { NavbarComponent } from '../NavbarComponent/NavbarComponent'
import { Footer } from "../Footer/Footer"
import { IntroBg } from "../IntroBg/IntroBg"
import { IntroText } from "../IntroText/IntoText"
import { Contact } from '../Contact/Contact'



export const LandingPage = () => {
    return (
        <>
             <NavbarComponent/>
            <IntroBg />
            <IntroText />
            <Contact />
            {/* <Footer /> */}
           
        </>
                )
}