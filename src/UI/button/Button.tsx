import s from './Button.module.css';

interface ButtonProps{
    children: React.ReactNode,
}

export const Button:React.FC<ButtonProps> = ({children}) => {
    return (
        <button className={s.button}>{children}</button>
    )
}