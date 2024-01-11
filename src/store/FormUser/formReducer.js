import { createReducer } from "@reduxjs/toolkit"
import { addNameAction, addNumberAction } from "store/actions"

const initialState = { name: '', number: '' }

export const formReducer = createReducer(initialState, (builder) => {
    builder.addCase(addNameAction, (state, action) => {
        return {
            ...state,
            name: action.payload
        }
    })
        .addCase(addNumberAction, (state, action) => {
            return {
                ...state,
                number: action.payload
            }

        })
    
})