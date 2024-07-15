import '../../../common.css';
import s from './FormBlock.module.css';
import { FormMain } from "../../../UI/formMain/FormMain"
import { Title } from '../../common/title/Title';


export const FormBlock:React.FC = () => {
    return (
        <section className={s.reservation}>
            <div className="container">
                <div className="wrapper">
                    <div className={s.reservation__overlay}></div>
                <FormMain><h2 className={s.reservation__title}>Забронировать дату</h2></FormMain>
                </div>
            </div>
        </section>
    )
}