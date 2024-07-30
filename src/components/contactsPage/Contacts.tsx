import { Footer } from "../common/footer/Footer"
import { Header } from "../common/header/Header"
import s from './Contacts.module.css';
import '../../common.css';
import AVATAR_IMG from './contacts-img/IMG_2067.jpg';
import { Title } from "../common/title/Title";
import { SotialNetwork } from "../../UI/NavBarSotialNetwork/SotialNetwork";
import { YandexMaps } from "../maps/YandexMaps";
import { useAppSelector } from "../../store/hooks";
import { DescriptionText } from "../decriptionText/DescriptionText";
import { MyModal } from "../modalWindow/MyModal";


export const Contacts: React.FC = () => {

    const modal = useAppSelector(state => state.modal.modal)

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
            {modal && <MyModal ><DescriptionText margin={10} color='#3f3f3f' >Спасибо, визажист скоро с вами свяжется</DescriptionText></MyModal>}
            <Footer />
        </div>
    )
}