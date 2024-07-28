import '../../../common.css';
import s from './FormBlock.module.css';
import { FormMain } from "../../../UI/formMain/FormMain"



export const FormBlock:React.FC = () => {
    return (
        <section className={s.reservation}>
            <div className="container">
                <div className="wrapper">
                    <div className={s.reservation__overlay}></div>
                <FormMain>Уточнить свободную дату</FormMain>
                </div>
            </div>
        </section>
    )
}