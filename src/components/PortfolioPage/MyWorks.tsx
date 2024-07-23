import { Footer } from "../common/footer/Footer";
import { Header } from "../common/header/Header"
import { Gallery } from "./gallery/Gallery"

import s from './MyWorks.module.css';


export const MyWorks:React.FC = () => {
    return(
        <section>
            <Header/>
            <div className={s.myWorks}>
            <Gallery/>
            </div>
            <Footer/>
        </section>
    )
}