import './Alert.scss'

type AlertProps = {
    children: React.ReactNode
}
export const Alert = (props: AlertProps) =>{
    return(
        <div className='top-bar'>
        {props.children}
        </div>
    )
}