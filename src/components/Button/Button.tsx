import './Button.scss'

interface ButtonProps {
    className: string,
    text: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    
}

export const Button = (props: ButtonProps) => {
    
    return(
        <button className={props.className} onClick={props.onClick} >{props.text}</button>
    )
}