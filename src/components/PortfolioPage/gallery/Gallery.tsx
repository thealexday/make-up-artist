import s from './Gallery.module.css';
import { useState } from 'react';
import { images } from './imgSourse';

import '../../../common.css';
import { GalerySlider } from './gallerySlider/GallerySlider';

export const Gallery:React.FC = () => {
    const [slider, setSlider] = useState(false);
    const [show, setShow] = useState(0);
  
    const handleClick = (id: number):void => {
      setSlider(!slider)
      setShow(id)
      console.log('click')
    }
  
    return (
  
      <div className={s.galleryBox}>
        <div className='container'>
          <div className={s.gallery} >
            {images.map(image => <div className={s.imgBox} key={image.id}><img className={s.image} onClick={() => handleClick(image.id)} src={image.src} width={image.with} height={image.height} alt="photo" /></div>)}
            {slider && <GalerySlider show={show} setSlider={setSlider} setShow={setShow}><img src={images[show].src} alt="photo" width='100%' height={images[show].height} /></GalerySlider>}
          </div>
        </div>
      </div>
    )
}