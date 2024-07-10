import { Footer } from "../common/footer/Footer";
import { Header } from "../common/header/Header";
import { FormBlock } from "./formBlock/FormBlock";
import { CardPrice } from "./Main/cardsPrice/CardPrice";
import { Main } from "./Main/main/Main";

export const MainPage:React.FC = () => {
    return (
        <>
        <Header/>
        <Main/>
        <CardPrice/>
        <FormBlock/>
        <Footer/>
        </>
    )
}