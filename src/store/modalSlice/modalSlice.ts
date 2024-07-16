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
            state.modal = false
        },
        showModal: (state, action) => {
            state.modal = true
        }
    }
});

export const { hideModal, showModal } = modalSlice.actions;
export default modalSlice.reducer;