import s from './Footer.module.css';
import '../../../common.css';
import { SotialNetwork } from '../../../UI/NavBarSotialNetwork/SotialNetwork';

export const Footer:React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className="wrapper">
                    <section className={s.footer__box}>
                    <p className={s.footerRights}>Polina Eremina Copyright &copy; All rights reserved 2023</p>
                    <SotialNetwork/>
                    </section>
                </div>
            </div>
        </footer>
    )
}