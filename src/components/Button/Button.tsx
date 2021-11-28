import './Button.scss'

type ButtonProps = {
    class: string,
    text: string
}


export const Button = (props: ButtonProps) => {
    return(
        <button className={props.class}>{props.text}</button>
    )
}