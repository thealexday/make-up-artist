import { Link } from 'react-router-dom';
import s from './PhotoCourseNav.module.css';
import { Title } from '../../components/common/title/Title';
import Img_2 from './img/photo_2023-09-27_16-29-04.jpg';
import Img_3 from './img/КистьФон линия.png';

export const PhotoCourseNav: React.FC = () => {
    return (
        <Link className={s.indexMain__courseLink} to={'/course'}>
            <div>
                <Title align='center'>КУРС</Title>
                <img src={Img_2} alt="фото для ссылки курса" width="200px" height="auto" />
            </div>
            <img className={s.indexMain__courseBrush} src={Img_3} alt="фото" width="150px" height="auto" />
        </Link>
    )
}