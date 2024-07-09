import s from './ButtonHeader.module.css';

interface ButtonHeaderProps{
    children: React.ReactNode,
}

export const ButtonHeader:React.FC<ButtonHeaderProps> = ({children}) => {
    return (
        <button className={s.buttonLink}>{children}</button>
    )
}