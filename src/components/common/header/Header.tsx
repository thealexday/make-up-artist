import '../../../common.css';
import s from './Header.module.css';

import { NavBar } from '../../../UI/navBar/NavBar';
import { SotialNetwork } from '../../../UI/NavBarSotialNetwork/SotialNetwork';
import { ButtonHeader } from '../../../UI/button-header/ButtonHeader';
import { MyModal } from '../../modalWindow/MyModal';
import { FormMain } from '../../../UI/formMain/FormMain';
import { useState } from 'react';

export const Header:React.FC = () => {
    const [modal, setModal] = useState(false);
    return (
        <header className={s.header}>
            <div className="container">
                <section>
                    <NavBar/>
                    <SotialNetwork/>
                    <ButtonHeader onClick={() => setModal(true)}>Записаться</ButtonHeader>
                    {modal &&  <MyModal setModal={setModal}><FormMain formModalStyle={true}></FormMain></MyModal>}
                </section>
            </div>
        </header>
    )
}
