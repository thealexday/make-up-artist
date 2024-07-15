import { createSlice } from "@reduxjs/toolkit";

type Modal = {
    modal: boolean,
}

const initialState: Modal = {
    modal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        hideModal: (state, action) => {
            
        }
    }
});

export const { hideModal } = modalSlice.actions;
export default modalSlice.reducer;