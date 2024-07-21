import '../../../../common.css';
import s from './MainTabletCourse.module.css';
import IMG from '../img/polinaBezFona.png';
import { Title } from '../../../common/title/Title';
import { Link } from 'react-router-dom';
import { DescriptionText } from '../../../decriptionText/DescriptionText';

export const MainTabletCourse:React.FC = () => {
    return (
        <section className={s.mainTabletCourse}>
            <div className="container, main-tablet-course__wrapper">
                <div className={s.mainTabletCourse__imgBox}>
                    <img className={s.mainTabletCourse__img} src={IMG} alt="фото визажиста" />
                </div>
                <div className={s.mainTabletCourse__infoBox}>
                    <Title weight={400} size={60} margin={5}>КУРС</Title>
                    <Title >"Макияж для себя"</Title>
                     <DescriptionText size={20} weight={400} color='#3f3f3f'>За один или два дня я покажу тебе, как делать себе макияжи
                        на
                        каждый день, а также как собраться на фотосессию или мироприятие. Мы разберем твою косметичку, а
                        также я помогу с выбором новых средств</DescriptionText>
                    <Link className={s.mainTabletLink} to={'./course'}>ПОДРОБНЕЕ</Link>
                </div>
            </div>
        </section>
    )
}
