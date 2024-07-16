import { createSlice } from "@reduxjs/toolkit";

type Modal = {
    formModal: boolean,
}

const initialState: Modal = {
    formModal: false
}

const formModalSlice = createSlice({
    name: 'formModal',
    initialState,
    reducers: {
        hideFormModal: (state, action) => {
            state.formModal = false
        },
        showFormModal: (state, action) => {
            state.formModal = true
        }
    }
});

export const { hideFormModal, showFormModal } = formModalSlice.actions;
export default formModalSlice.reducer;