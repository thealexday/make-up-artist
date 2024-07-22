import { Header } from "../common/header/Header"
import { Gallery } from "./gallery/Gallery"


export const MyWorks:React.FC = () => {
    return(
        <div>
            <Header/>
            <h1>Портфолио</h1>
            <Gallery/>
        </div>
    )
}