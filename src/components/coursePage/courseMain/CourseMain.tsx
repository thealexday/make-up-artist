import s from './CourseMain.module.css';
import '../../../common.css';
import { Title } from '../../common/title/Title';
import IMG from '../courseIMG/photo_2023-09-27_16-29-04.jpg';
import IMG_ARROW from '../courseIMG/course-arrow.png';

export const CourseMain:React.FC = () => {
    return (
        <main className={s.courseMain}>
            <div className="container">
                <div className="wrapper">
                    <div className={s.courseMain__photoBox}>
                        <h1 className={s.courseMain__title}>МАКИЯЖ ДЛЯ СЕБЯ</h1>
                        <div className={s.courseMain__TitleBox}>
                            <h2 className={s.courseMain__subtitle}>ОТРАБОТКИ</h2>
                            <h2 className={s.courseMain__subtitle}>2 ПАКЕТА</h2>
                        </div>
                        <img className={s.courseMain__img} src={IMG} alt="фото визажиста" />
                        <img className={[s.courseMain__dinamicArrow, s.shake__vertical].join(' ')} src={IMG_ARROW} alt="иконка стрелки" />
                    </div>
                </div>
            </div>
        </main>
    )
}