import { Footer } from "../common/footer/Footer"
import { Header } from "../common/header/Header"
import { CourseItem } from "./courseItem/CourseItem"
import { Title } from '../common/title/Title';
import { DescriptionText } from '../decriptionText/DescriptionText';
import { MyModal } from "../modalWindow/MyModal";

import s from './Course.module.css';
import { CourseSuggest } from "./courseSuggest/CourseSuggest";
import { CourseMain } from "./courseMain/CourseMain";

import { TitleLine } from "../common/titleLine/TitleLine";
import { ButtonHeader } from "../../UI/button-header/ButtonHeader";

import { useAppSelector,  useAppDispatch} from "../../store/hooks";
import { showFormModal } from "../../store/formModalSlice/formModalSlice";
import { FormModalWindow } from "../../UI/formModal/FormModalWindow";
import { FormMain } from "../../UI/formMain/FormMain";







export const Course: React.FC = () => {
    
    const modalForm = useAppSelector(state => state.formModal.formModal);
    const modal = useAppSelector(state => state.modal.modal);
    const dispatch = useAppDispatch();
    
    return (
        <div>
            <Header cons={true}/>
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
            <div className={s.buttonWrapper}>
                <ButtonHeader onClick={() => dispatch(showFormModal(true))}>Получить консультацию</ButtonHeader>
            </div>
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
            <div className={s.buttonWrapper}>
                <ButtonHeader onClick={() => dispatch(showFormModal(true))}>Получить консультацию</ButtonHeader>
            </div>
            {modalForm &&  <FormModalWindow ><FormMain course={true} formModalStyle={true}></FormMain></FormModalWindow>}
            {modal && <MyModal ><DescriptionText margin={10} color='#3f3f3f' >Спасибо, визажист скоро с вами свяжется</DescriptionText></MyModal>}
            <Footer />
        </div>
    )
}