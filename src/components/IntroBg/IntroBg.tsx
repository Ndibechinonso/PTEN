import './IntroBg.scss'
import penLogo from '../../Assets/penlogo.svg'

export const IntroBg = () => {
    return(
        <div className='overlay' style={{backgroundImage: "url(" + penLogo + ")", backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
            {/* <img src={penLogo} /> */}

        </div>
    )
}