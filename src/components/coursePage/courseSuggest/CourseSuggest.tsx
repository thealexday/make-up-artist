import { DescriptionText } from "../../decriptionText/DescriptionText";
import { Title } from "../../common/title/Title";

import s from './CourseSuggest.module.css';
import IMGHart from '../courseIMG/СЕРДЦЕ_Монтажная область 1.png';

export const CourseSuggest:React.FC = () => {
    return (
        <div>
            <Title sizemobile={18} size={30} color='white' align='center'>А ТАКЖЕ</Title>
                <div className={s.paket__suggest}>
                    <img className={s.paket__suggestIcon} src={IMGHart} alt="иконка сердца" width="20px" height="auto" />
                    <DescriptionText size={20} color='white'>Помощь в подборе нужных средств</DescriptionText>
                </div>
                <div className={s.paket__suggest}>
                    <img className={s.paket__suggestIcon} src={IMGHart} alt="иконка сердца" width="20px" height="auto" />
                    <DescriptionText size={20} color='white'>Лайфхаки по построению стрелок и контура губ</DescriptionText>
                </div>
                <div className={s.paket__suggest}>
                    <img className={s.paket__suggestIcon} src={IMGHart} alt="иконка сердца" width="20px" height="auto" />
                    <DescriptionText size={20} color='white'>Блокнот для записи и стикерпак для заметок</DescriptionText>
                </div>
        </div>
    )
}