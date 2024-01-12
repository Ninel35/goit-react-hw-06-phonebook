import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { formReducer } from "./FormUser/formSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import storage from 'redux-persist/lib/storage'
import { filterReducer } from "./Filter/filterSlice";



const reducer = combineReducers({
    formUser: formReducer,
    contacts: contactsReducer,
    filter: filterReducer
})

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: persistedReducer
})
    
export const persistor = persistStore(store)
