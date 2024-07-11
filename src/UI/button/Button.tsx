import s from './Button.module.css';

interface ButtonProps{
    children: React.ReactNode,
    onClick: () => void,
    buttonWhite?: boolean,
}

export const Button:React.FC<ButtonProps> = ({children, onClick, buttonWhite}) => {
    return (
        <button onClick={onClick} className={buttonWhite ? s.buttonWhite : s.button}>{children}</button>
    )
}