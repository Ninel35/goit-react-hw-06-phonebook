import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { formReducer } from "./FormUser/formSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import storage from 'redux-persist/lib/storage'
import { filterReducer } from "./Filter/filterSlice";


const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)


const reducer = {
    formUser: formReducer,
    contacts: persistedReducer,
    filter: filterReducer
}



export const store = configureStore({
    reducer
})
    
export const persistor = persistStore(store)
