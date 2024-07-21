import s from './Footer.module.css';
import '../../../common.css';
import { SotialNetwork } from '../../../UI/NavBarSotialNetwork/SotialNetwork';
import { DescriptionText } from '../../decriptionText/DescriptionText';


export const Footer:React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className="wrapper">
                    <section className={s.footer__box}>
                        <DescriptionText color='#e9e7e7' sizemobile={10} size={15} weight={200}>Polina Eremina Copyright &copy; All rights reserved 2023</DescriptionText>
                    <SotialNetwork/>
                    </section>
                </div>
            </div>
        </footer>
    )
}