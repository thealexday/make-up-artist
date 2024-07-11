import { createSlice } from "@reduxjs/toolkit";


type CardDescription = {
    id: number,
    title: string,
    description: string,
    buttonText: string,
}

type CardsDescription = {
    cardsDescription: CardDescription[];
}

const initialState: CardsDescription = {
    cardsDescription: [{
        id: 1,
        title: 'Макияж',
        description: 'Макияж включает в себя накладные ресницы, глаза, губы',
        buttonText: 'НАЗАД'
    },
    {
        id: 2,
        title: 'Макияж & Локоны',
        description: 'Макияж включает в себя накладные ресницы, глаза, губы',
        buttonText: 'НАЗАД'
    },
    {
        id: 3,
        title: 'Макияж & Прическа',
        description: 'Макияж включает в себя накладные ресницы, глаза, губы',
        buttonText: 'НАЗАД'
    },
    {
        id: 4,
        title: 'Макияж & Прическа',
        description: 'Макияж включает в себя накладные ресницы, глаза, губы',
        buttonText: 'НАЗАД'
    },
]
}

export const cardDescriptionSlice = createSlice({
    name: 'cardDescription',
    initialState,
    reducers: {
        hideCardInfo: (state, action) => {

        }
    }
});

export const { hideCardInfo } = cardDescriptionSlice.actions;
export default cardDescriptionSlice.reducer;