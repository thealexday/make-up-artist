
import IMG from '../../components/main-page/Main/img/IMG_3375.jpg';
import IMG_2 from '../../components/main-page/Main/img/IMG_3585.jpg';
import IMG_3 from '../../components/main-page/Main/img/IMG_4871.jpg';
import IMG_4 from '../../components/main-page/Main/img/photo_2023-11-24_20-12-09.jpg';
type Card = {
    id: number,
    title: string,
    img: any,
    price: string,
    buttonText: string,
}



export const cardsPrice: Card[] = [
    {
        id: 1,
        title: 'Макияж',
        img: IMG,
        price: '2000р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    {
        id: 2,
        title: 'Макияж & Локоны',
        img: IMG_2,
        price: '3000р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    {
        id: 3,
        title: 'Макияж & Прическа',
        img: IMG_3,
        price: '3500р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    {
        id: 4,
        title: 'Свадебный образ',
        img: IMG_4,
        price: '3500р',
        buttonText: 'ПОДРОБНЕЕ'
    },

]