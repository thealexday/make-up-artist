import { Title } from '../title/Title';
import s from './TitleLine.module.css';

export const TitleLine:React.FC = () => {
    return (
        <div className={s.titleLineBox}>
        <div className={s.line}></div>
        <Title>Прайс</Title>
        <div className={s.line}></div>
        </div>
    )
}
