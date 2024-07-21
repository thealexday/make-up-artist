import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IMG from '../components/main-page/Main/img/IMG_3375.jpg';
import IMG_2 from '../components/main-page/Main/img//IMG_3585.jpg';
import IMG_3 from '../components/main-page/Main/img/IMG_4871.jpg';
import IMG_4 from '../components/main-page/Main/img/photo_2023-11-24_20-12-09.jpg';


const cardsDescription = [
    {
        id: 1,
        title: 'Макияж',
        description: 'Макияж любой сложности от нежного нюдового до цветного со стразами и стрелками. Реснички пучки входят в стоимость.',
        buttonText: 'НАЗАД'
    },
    {
        id: 2,
        title: 'Макияж & Локоны',
        description: 'Макияж любой сложности от нежного нюдового до цветного со стразами и стрелками. Реснички пучки входят в стоимость. Стойкие подвижные локоны, которые подбираю под Ваш тип волос.',
        buttonText: 'НАЗАД'
    },
    {
        id: 3,
        title: 'Макияж & Прическа',
        description: 'Макияж любой сложности' + '\n' + 'от нежного нюдового до цветного со стразами и стрелками. Реснички пучки входят в стоимость. Помогу подобрать вид собранной прически (хвост, пучок, может быть как гладким, так и собранным из локонов).',
        buttonText: 'НАЗАД'
    },
    {
        id: 4,
        title: 'Макияж & Прическа',
        description: 'Самый стойкий образ, который продержится на Вас с 5 утра, до самой ночи. В стоимомть включена консультация, реснички пучки, шпильки, невидимки, крепление фаты, шнуровка платься при необходимости. А также в подарок наборчик для поддержания макияжа в течении дня!',
        buttonText: 'НАЗАД'
    },
]

const cards = [{
    id: 0,
    title: 'Макияж',
    img: IMG,
    price: '2000р',
    buttonText: 'ПОДРОБНЕЕ'
},
{
    id: 1,
    title: 'Макияж & Локоны',
    img: IMG_2,
    price: '3000р',
    buttonText: 'ПОДРОБНЕЕ'
},
{
    id: 2,
    title: 'Макияж & Прическа',
    img: IMG_3,
    price: '3500р',
    buttonText: 'ПОДРОБНЕЕ'
},
{
    id: 3,
    title: 'Свадебный образ',
    img: IMG_4,
    price: '3500р',
    buttonText: 'ПОДРОБНЕЕ'
},
]



type Card = {
    id: number,
    title: string,
    img?: any,
    description?: string,
    price: string,
    buttonText: string,
}

type Cards = {
    cards: Card[],
}

export const initialState: Cards = {
    cards: [{
        id: 0,
        title: 'Макияж',
        img: IMG,
        price: '2000р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    {
        id: 1,
        title: 'Макияж & Локоны',
        img: IMG_2,
        price: '3000р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    {
        id: 2,
        title: 'Макияж & Прическа',
        img: IMG_3,
        price: '3500р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    {
        id: 3,
        title: 'Свадебный образ',
        img: IMG_4,
        price: '3500р',
        buttonText: 'ПОДРОБНЕЕ'
    },
    ]
}



const cardsSlice = createSlice({
    name: 'cardDescription',
    initialState,
    reducers: {
        showCardInfo: (state, action: PayloadAction<number>) => {
           console.log('fe')
            state.cards = state.cards.map(card => {
                if (state.cards[action.payload].buttonText.toLocaleUpperCase() === 'ПОДРОБНЕЕ') {
                    if (card.id !== action.payload) return card
                    return {
                        ...card,
                        img: '',
                        description: cardsDescription[card.id].description,
                        buttonText: 'НАЗАД'
                    }
                } else {
                    if (card.id !== action.payload) return card
                    return {
                        ...card,
                        img: cards[action.payload].img,
                        description: '',
                        buttonText: 'ПОДРОБНЕЕ'
                    }
                }

            })
        },
        hideCardInfo: () => {

        }
    }
});

export const { showCardInfo } = cardsSlice.actions;
export default cardsSlice.reducer;