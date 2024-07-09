import '../../../common.css';
import s from './Header.module.css';

import { NavBar } from '../../../UI/navBar/NavBar';
import { SotialNetwork } from '../../../UI/NavBarSotialNetwork/SotialNetwork';
import { ButtonHeader } from '../../../UI/button-header/ButtonHeader';

export const Header:React.FC = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <section>
                    <NavBar/>
                    <SotialNetwork/>
                    <ButtonHeader>Записаться</ButtonHeader>
                </section>
            </div>
        </header>
    )
}
