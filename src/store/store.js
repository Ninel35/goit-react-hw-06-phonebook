import { configureStore } from "@reduxjs/toolkit";

import { formReducer } from "./FormUser/formReducer";
import { contactsReducer } from "./contacts/contactsSlice";



const reducer = {
    formUser: formReducer,
    contacts: contactsReducer
}



export const store = configureStore({
    reducer
})
