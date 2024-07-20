import s from './MainPage.module.css';

import { Footer } from "../common/footer/Footer";
import { Header } from "../common/header/Header";
import { FormBlock } from "./formBlock/FormBlock";
import { CardPrice } from "./Main/cardsPrice/CardPrice";
import { MainTabletCourse } from "./Main/main-tablet-page/MainTabletCourse";
import { Main } from "./Main/main/Main";
import { MainMobileCourse } from './Main/main-mobile-course/MainMobileCourse';


export const MainPage:React.FC = () => {
    return (
        <div >
        <Header/>
        <Main/>
        <MainTabletCourse />
        <MainMobileCourse/>
        <CardPrice/>
        <FormBlock/>
        <Footer/>
        </div>
    )
}