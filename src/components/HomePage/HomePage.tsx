import './HomePage.scss'
import { Alert } from "../Alert/Alert"
import { Footer } from "../Footer/Footer"
import { IntroBg } from "../IntroBg/IntroBg"
import { IntroText } from "../IntroText/IntoText"
import { NavbarComponent } from "../NavbarComponent/NavbarComponent"
import { Usp } from "../Usp/Usp"
import { Contact } from '../Contact/Contact'


export const HomePage = () => {
    return (
        <div>
            <div className='top-div'>
            <Alert>
                <p>Get free 1-to-1 Mentoring to help your business grow online. <b>Request a Mentor.</b></p>
            </Alert>
             <NavbarComponent />
             </div>
            <IntroBg />
            <IntroText />
            <Usp/>
            <Contact />
            <Footer />
        </div>
                )
}