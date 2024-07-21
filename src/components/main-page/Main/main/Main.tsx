import s from './Main.module.css';
import '../../../../common.css';
import Img_1 from '../img/IMG_4732К.jpg';

import Img_2 from '../img/course-arrow.png';

import { Title } from '../../../common/title/Title';
import { PhotoCourseNav } from '../../../../UI/photoCourseNav/PhotoCourseNav';


export const Main:React.FC = () => {
    
    return (
        <div className={s.indexMain}>
            <div className="container">
                <div className="wrapper">
                    <div className={s.overlay}></div>
                    <section className={s.indexMainBox}>
                        <section className={s.indexMainLeft}>
                            <div className={s.indexMain__imgContainer}>
                                <img width="100%" height="auto"  src={Img_1} alt="фото-потртет-визажиста" />
                            </div>
                            <div className={s.indexMain__description}>
                                <Title alignmobile='center' marginmobile={50} sizemobile={24} colormobile={'white'}>Обо мне</Title>
                                <ul className={s.indexMain__listContainer}>
                                    <li className={s.indexMain__descriptionList}>
                                    - Крашу <span className={s.colorMarker}>не по
                                        шаблону</span>, а слушаю, чего хочешь ты
                                    </li>
                                    <li className={s.indexMain__descriptionList}>
                                    - Сделала <span className={s.colorMarker}>500+
                                    </span>
                                    образов, чтобы научить и тебя делать <span className={s.colorMarker}>идеальные
                                        стрелки</span>
                                    </li>
                                    <li className={[s.indexMain__descriptionList, s.indexMain__arrow, s.indexMain__mediaTablet__none].join(' ')}>
                                    <span className={s.colorMarker}>- Обучаю макияжу для себя</span>
                                    <img width="100px" height="auto" className={s.courseArrow}
                                        src={Img_2} alt="arrow-icon"/>
                                    </li>
                                </ul>
                                <h2 className={s.signacher}>Popo_make</h2>
                            </div>
                        </section>
                        <section className={s.indexMain__right}>
                        <PhotoCourseNav/>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}