import s from './SotialNetworks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';


export const SotialNetwork:React.FC = () => {
    return(
        <nav className={s.mediaLinks__box}>
            <a className={s.mediaLink} href="https://wa.me/79994522614" target="blank">
                wh
                <FontAwesomeIcon icon={faChartSimple} />
            </a>
            <a className={s.mediaLink} href="https://vk.com/popo_make" target="blank"> vk</a>
           
            <a className={s.mediaLink} href="https://instagram.com/popo_make?igshid=OGQ5ZDc2ODk2ZA==" target="blank" >inst</a>
            
        </nav>
    )
}