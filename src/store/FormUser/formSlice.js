import { createSlice } from "@reduxjs/toolkit"


const initialState = { name: '', number: '' }


const formSlice = createSlice({
    name: 'formUser',
    initialState,
    reducers: {
        addNameAction: (state, { payload }) => {
           return {
            ...state,
            name: payload
        } 
        },
        addNumberAction: (state, { payload }) => {
            return {
                ...state,
                number: payload
            } 
        }
    }
})
export const formReducer = formSlice.reducer
export const {addNameAction, addNumberAction} = formSlice.actions
   