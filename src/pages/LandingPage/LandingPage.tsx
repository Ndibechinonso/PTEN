import './LandingPage.scss'
import { NavbarComponent } from '../../components/NavbarComponent/NavbarComponent'
import { Footer } from "../../components/Footer/Footer"
import { IntroBg } from "../../components/IntroBg/IntroBg"
import { IntroText } from "../../components/IntroText/IntoText"
import { Contact } from '../../components/Contact/Contact'



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