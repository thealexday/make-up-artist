import { Title } from "../../components/common/title/Title";
import { ButtonHeader } from "../button-header/ButtonHeader";
import s from './FormMain.module.css';

export const FormMain:React.FC = () => {
    
    return(
        <form className={s.reservationForm} action="">
            <h2 className={s.reservationForm__title}>Забронировать дату</h2>
            <input className={s.reservationForm__input} type="text" placeholder="Ваше имя"/> <br />
            <input className={s.reservationForm__input} type="text" placeholder="Номер телефона"/> <br />
            <textarea className={s.reservationForm__input} name="сообщение"  cols={20} rows={10} placeholder="Написать сообщение (не обязательно)"></textarea> <br />
            <button className={s.reservationForm__button}>ЗАПИСАТЬСЯ</button>
        </form>
        
    )
}