import s from './GallerySlider.module.css';
import '../../../../common.css';
import { images } from '../imgSourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface GalerySliderProps{
    children: React.ReactNode,
    show: number,
    setShow: (id: number) => void,
    setSlider: (a: boolean) => void,
}

export const GalerySlider:React.FC<GalerySliderProps> = ({ children, show, setShow, setSlider}) =>  {


    const handleLeft = () => {
        if(show <= 0){
            setShow(images.length -1)
            return
        }
        setShow(show - 1)
     
    }

    const handleRight = () => {
        if(show >= images.length -1){
            setShow(0)
            return
        }
        setShow(show + 1)
        
    }

    return (
        <div>
            <div className="container">
                <div className={s.modal}>
                
                <FontAwesomeIcon onClick={handleLeft} className={s.arrowLeft} icon={faArrowLeft}/>
                    <div className={s.modalContent}>
                   
                    <FontAwesomeIcon className={s.close} onClick={() => setSlider(false)} icon={faCircleXmark}/>
                        {children}
                    </div>
                   
                    <FontAwesomeIcon onClick={handleRight} className={s.arrowRight} icon={faArrowRight}/>
                </div>
              
            </div>
        </div>
    )
}


