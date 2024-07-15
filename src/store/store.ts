import { configureStore } from '@reduxjs/toolkit';

import cardsScileReducer from './cardsScile';
import modalSliceReducer from './modalSlice/modalSlice'

export const store = configureStore({
    reducer: {
        card: cardsScileReducer,
        modal: modalSliceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;