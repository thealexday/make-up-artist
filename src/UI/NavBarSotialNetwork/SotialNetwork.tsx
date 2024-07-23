import s from './SotialNetworks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faVk, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const SotialNetwork:React.FC = () => {
    return(
        <nav className={s.mediaLinks__box}>
            <a className={s.mediaLink} href="https://wa.me/79994522614" target="blank">
                <FontAwesomeIcon className={s.mediaLink__fa} icon={faWhatsapp} />
            </a>
            <a className={s.mediaLink} href="https://vk.com/popo_make" target="blank"> 
            <FontAwesomeIcon className={s.mediaLink__fa} icon={faVk} />
            </a>
           
            <a className={s.mediaLink} href="https://instagram.com/popo_make?igshid=OGQ5ZDc2ODk2ZA==" target="blank" >
            <FontAwesomeIcon className={s.mediaLink__fa} icon={faInstagram} />
                </a>
            
        </nav>
    )
}