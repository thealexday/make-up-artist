import '../../../../common.css';
import s from './MainTabletCourse.module.css';
import IMG from '../img/polinaBezFona.png';
import { Title } from '../../../common/title/Title';
import { Button } from '../../../../UI/button/Button';
import { Link } from 'react-router-dom';

export const MainTabletCourse:React.FC = () => {
    return (
        <section className={s.mainTabletCourse}>
            <div className="container, main-tablet-course__wrapper">
                <div className={s.mainTabletCourse__imgBox}>
                    <img className={s.mainTabletCourse__img} src={IMG} alt="фото визажиста" />
                </div>
                <div className={s.mainTabletCourse__infoBox}>
                    <Title titleTablet={true}>КУРС</Title>
                    <Title >"Макияж для себя"</Title>
                    <p className={s.mainTabletCourse__text}>За один или два дня я покажу тебе, как делать себе макияжи на
                    каждый день, а также как собраться на фотосессию или мироприятие. Мы разберем твою косметичку, а
                    также я помогу с выбором новых средств</p>
                    <Link className={s.mainTabletLink} to={'./course'}>ПОДРОБНЕЕ</Link>
                </div>
            </div>
        </section>
    )
}
