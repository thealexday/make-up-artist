import '../../../../common.css';
import s from './MainMobileCourse.module.css';
import IMG from '../img/polinaBezFona.png';
import { Title } from '../../../common/title/Title';
import { Link } from 'react-router-dom';


export const MainMobileCourse:React.FC = () => {
    return (
        <section className={s.mainMobileCourse}>
            <div className="container">
                <div className="wrapper main-tablet-course__info">
                <div className={s.mainMobileCourse__imgBox}>
                    <img className={s.mainMobiletCourse__img} src={IMG} height="200px" width="auto"  alt="фото визажиста" />
                </div>
            <section>
                <Title >КУРС</Title>
                <Title>"Макияж для себя"</Title>
                <p>За один или два дня я покажу тебе, как делать себе макияжи
                        на
                        каждый день, а также как собраться на фотосессию или мироприятие. Мы разберем твою косметичку, а
                        также я помогу с выбором новых средств</p>
                        <Link className={s.mainMobileLink} to={'./course'}>ПОДРОБНЕЕ</Link>
            </section>
                </div>
            </div>
        </section>
    )
}
