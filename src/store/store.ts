import { configureStore } from '@reduxjs/toolkit';
import cardDescriptionReducer from './cardDescriptionSlice';
import cardsScileReducer from './cardsScile';

export const store = configureStore({
    reducer: {
        cardDescription: cardDescriptionReducer,
        card: cardsScileReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;