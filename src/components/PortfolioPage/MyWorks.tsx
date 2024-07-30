import { useAppSelector } from "../../store/hooks";
import { Footer } from "../common/footer/Footer";
import { Header } from "../common/header/Header"
import { Gallery } from "./gallery/Gallery"
import { DescriptionText } from "../decriptionText/DescriptionText";
import { MyModal } from "../modalWindow/MyModal";

import s from './MyWorks.module.css';


export const MyWorks:React.FC = () => {
    const modal = useAppSelector(state => state.modal.modal)
    return(
        <section>
            <Header/>
            <div className={s.myWorks}>
            <Gallery/>
            </div>
            {modal && <MyModal ><DescriptionText margin={10} color='#3f3f3f' >Спасибо, визажист скоро с вами свяжется</DescriptionText></MyModal>}
            <Footer/>
        </section>
    )
}