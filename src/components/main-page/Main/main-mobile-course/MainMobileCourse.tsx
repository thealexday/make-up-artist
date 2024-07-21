import '../../../../common.css';
import s from './MainMobileCourse.module.css';
import IMG from '../img/polinaBezFona.png';
import { Title } from '../../../common/title/Title';
import { Link } from 'react-router-dom';
import { DescriptionText } from '../../../decriptionText/DescriptionText';


export const MainMobileCourse: React.FC = () => {
    return (
        <section className={s.mainMobileCourse}>
            <div className="container">
                <div className="wrapper">
                    <div className={s.mobileCourseInfo}>
                    <div className={s.mainMobileCourse__imgBox}>
                        <img className={s.mainMobiletCourse__img} src={IMG} height="200px" width="auto" alt="фото визажиста" />
                    </div>
                    <section className={s.mainMobileCourse__infoBox}>
                        <Title sizemobile={24}>КУРС</Title>
                        <DescriptionText sizemobile={20}>"Макияж для себя"</DescriptionText>
                        <DescriptionText size={20} weight={400} color='#3f3f3f' sizemobile={16}>За один или два дня я покажу тебе, как делать себе макияжи
                            на
                            каждый день, а также как собраться на фотосессию или мироприятие. Мы разберем твою косметичку, а
                            также я помогу с выбором новых средств</DescriptionText>
                        <Link className={s.mainMobileLink} to={'./course'}>ПОДРОБНЕЕ</Link>
                    </section>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
