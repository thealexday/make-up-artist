import { Title } from '../title/Title';
import s from './TitleLine.module.css';

interface TitleLineProps{
    children: React.ReactNode
}

export const TitleLine:React.FC<TitleLineProps> = ({children}) => {
    return (
        <div className={s.titleLineBox}>
        <div className={s.line}></div>
        <Title sizemobile={20}>{children}</Title>
        <div className={s.line}></div>
        </div>
    )
}
