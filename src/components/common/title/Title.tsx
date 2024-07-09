import s from './Title.module.css';

interface TitleProps{
    children: React.ReactNode,
    centre?: boolean,
    left?: boolean,
    right?: boolean,
}

export const Title:React.FC<TitleProps> = ({children, centre, left, right}) => {
    return (
        <h1 className={centre ? [s.center, s.title].join(' ') : left ? [s.left, s.title].join(' ') : right ? [s.right, s.title].join(' ') : s.title}>{children}</h1>
    )
}