import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts:[]
}
  
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContactAction: (state, { payload })=>{
            return [...state.contacts, payload]
        },
        deleteContactsAction: (state, { payload }) => {
            return state.contacts.filter(item => {
                return item.id !== payload
            })
        }
        
    }
    
})

export const contactsReducer = contactsSlice.reducer
export const {addContactAction, deleteContactsAction} = contactsSlice.actions