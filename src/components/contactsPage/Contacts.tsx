import { Footer } from "../common/footer/Footer"
import { Header } from "../common/header/Header"
import s from './Contacts.module.css';
import '../../common.css';
import AVATAR_IMG from './contacts-img/IMG_2067.jpg';
import { Title } from "../common/title/Title";
import { SotialNetwork } from "../../UI/NavBarSotialNetwork/SotialNetwork";
import { YandexMaps } from "../maps/YandexMaps";


export const Contacts: React.FC = () => {
    return (
        <div>
            <Header />
            <section className={s.contacts}>
                <div className={[s.contactsBox, 'container'].join(' ')}>
                    <span className={s.contacts__photoBox}>
                        <img className={s.contacts__avatar} src={AVATAR_IMG} alt="photo" />
                    </span>
                    <Title sizemobile={20} align='center'>Полина Еремина</Title>
                    <SotialNetwork/>
                </div>
                <YandexMaps/>
            </section>
            <Footer />
        </div>
    )
}