import './Button.scss'

interface ButtonProps {
    class: string,
    text: string
}


export const Button = (props: ButtonProps) => {
    
    return(
        <button className={props.class}>{props.text}</button>
    )
}