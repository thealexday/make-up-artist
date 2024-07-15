import s from './ButtonHeader.module.css';

interface ButtonHeaderProps{
    children: React.ReactNode,
    onClick: () => void,
}

export const ButtonHeader:React.FC<ButtonHeaderProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={s.buttonLink}>{children}</button>
    )
}