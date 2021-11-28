import './IntroBg.scss'
import penLogo from '../../Assets/penlogo.jpeg'

export const IntroBg = () => {
    return(
        <div className='overlay'>
            <img src={penLogo} />

        </div>
    )
}