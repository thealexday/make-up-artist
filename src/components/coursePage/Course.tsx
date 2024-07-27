import { Footer } from "../common/footer/Footer"
import { Header } from "../common/header/Header"
import { CourseItem } from "./courseItem/CourseItem"
import { Title } from '../common/title/Title';
import { DescriptionText } from '../decriptionText/DescriptionText';

import s from './Course.module.css';
import { CourseSuggest } from "./courseSuggest/CourseSuggest";
import { CourseMain } from "./courseMain/CourseMain";

import { TitleLine } from "../common/titleLine/TitleLine";







export const Course: React.FC = () => {
    

    return (
        <div>
            <Header />
            <CourseMain/>
            <TitleLine>Пакет 1</TitleLine>
            <CourseItem>
                <Title sizemobile={18} color='white' align='center'>ОДИН ДЕНЬ / ~4 ЧАСА</Title>
                    <div className={s.textBox}>
                    <DescriptionText size={20} color='white'>Здесь мы разберем теорию, разберем косметичку, затем <span className={s.textMarker}>погрузимся в практику</span>  и освоим дневной макияж. После
                    преобразуем дневной макияж в вечерний</DescriptionText>
                    </div>
                    <div className={s.textBox}>
                    <CourseSuggest/>
                    </div>
            </CourseItem>
            
           <TitleLine>Пакет 2</TitleLine>
           <Title sizemobile={20} align="center">2 ДНЯ</Title>
            <CourseItem>
                <Title sizemobile={18} color='white' align='center'>ДЕНЬ 1 / ~4 ЧАСА</Title>
                <div className={s.textBox}>
                <DescriptionText size={20} color='white'>Здесь мы разберем теорию, <span className={s.textMarker}>особенности твоего лица</span>  , разберем косметичку, затем погрузимся в практику и освоим дневной макияж. После преобразуем дневной макияж в вечерний</DescriptionText>
                </div>
               <div className={s.textBox}>
               <CourseSuggest/>
               </div>
            </CourseItem>
            <CourseItem>
                <Title sizemobile={18} color='white' align='center'>ДЕНЬ 2 / ~4 ЧАСА</Title>
                <div className={s.textBox}>
                <DescriptionText size={20} color='white'>Вечерний макияж, либо креативный или любой другой, <span className={s.textMarker}>какой запал в твое сердечко</span>  и ты хочешь уметь его воплотить для себя Локоны на каждый день <span className={s.textMarker}>за 15 минут Работа с подложками</span> , графичными элементами, цветовым кругом</DescriptionText>
                </div>
               <div className={s.textBox}>
               <CourseSuggest/>
               </div>
            </CourseItem>
            <Footer />
        </div>
    )
}