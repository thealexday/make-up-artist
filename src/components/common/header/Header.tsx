import '../../../common.css';
import s from './Header.module.css';

import { NavBar } from '../../../UI/navBar/NavBar';
import { SotialNetwork } from '../../../UI/NavBarSotialNetwork/SotialNetwork';
import { ButtonHeader } from '../../../UI/button-header/ButtonHeader';
import { FormMain } from '../../../UI/formMain/FormMain';

import { FormModalWindow } from '../../../UI/formModal/FormModalWindow';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { showFormModal } from '../../../store/formModalSlice/formModalSlice';


export const Header:React.FC = () => {
    const modalForm = useAppSelector(state => state.formModal.formModal);
    const dispatch = useAppDispatch();
    
    return (
        <header className={s.header}>
            <div className="container">
                <section>
                    <NavBar/>
                    <SotialNetwork/>
                    <ButtonHeader onClick={() => dispatch(showFormModal(true))}>Записаться</ButtonHeader>
                    {modalForm &&  <FormModalWindow ><FormMain formModalStyle={true}></FormMain></FormModalWindow>}
                </section>
            </div>
        </header>
    )
}
