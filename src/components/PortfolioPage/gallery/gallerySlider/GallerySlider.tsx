import s from './GallerySlider.module.css';
import '../../../../common.css';
import { images } from '../imgSourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface GalerySliderProps {
    children: React.ReactNode,
    show: number,
    setShow: (id: number) => void,
    setSlider: (a: boolean) => void,
}

export const GalerySlider: React.FC<GalerySliderProps> = ({ children, show, setShow, setSlider }) => {
    const [xDown, setXDown] = useState(0);
    const [yDown, setYDown] = useState(0);

    const handleLeft = () => {
        if (show <= 0) {
            setShow(images.length - 1)
            return
        }
        setShow(show - 1)

    }

    const handleRight = () => {
        if (show >= images.length - 1) {
            setShow(0)
            return
        }
        setShow(show + 1)
    }

    const handleTouchStart = (e:React.TouchEvent<HTMLDivElement>):void => {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        setXDown(x)
        setYDown(y)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>):void => {
        if (!xDown) {
            return; 
        }
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        const xDiff = xDown - x;
        const yDiff = yDown - y;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {

            if(xDiff > 0 && show >= images.length - 1){
                setShow(0)
                
            } else if(xDiff > 0) {
                setShow(show + 1)
            } else if (xDiff < 0 && show <= 0){
                setShow(images.length - 1)
    
            } else {
                setShow(show - 1)
            }

        } else {
            return
        }
        setXDown(0)
    }


    return (
        <div>
            <div className="container">
                <div className={s.modal} onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)}>
                    <div className={s.modalBox}>
                    <FontAwesomeIcon onClick={handleLeft} className={s.arrowLeft} icon={faChevronLeft} />
                    <div className={s.modalContent} >

                        <FontAwesomeIcon className={s.close} onClick={() => setSlider(false)} icon={faCircleXmark} />
                        {children}
                    </div>

                    <FontAwesomeIcon onClick={handleRight} className={s.arrowRight} icon={faChevronRight} />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}


