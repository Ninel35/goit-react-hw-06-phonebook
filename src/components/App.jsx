import './../store/store.js'

import React, { useEffect, useState } from 'react'
import Filter from './Filter/Filter'
import Contacts from './Contacts/Contacts'
import FormUser  from './FormUser/FormUser'
import { useDispatch, useSelector } from 'react-redux'
import { addContactAction, deleteContactsAction } from 'store/contacts/contactsSlice.js'

export const App = () => {
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [])
  const { contacts } = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  
  const sendUserData = (data) => {
    if (contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())) {
      alert(data.name + " is already in contacts")
      return;
    }
    dispatch(addContactAction(data))
  }


    const handlerFilter = (evt) => {
      setFilter(evt.target.value)
  };
    
  
  const handleDelete = (evt) => {
    dispatch(deleteContactsAction(evt.target.parentElement.id))
  }
  
    const getVisibleContacts = () => {
      
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }



    return (
      <>
        <h1>Phonebook</h1>
        <FormUser sendUserData={sendUserData} />
        <h2>Contacts</h2>
        <Filter handlerFilter={handlerFilter} />
        <Contacts contactList={getVisibleContacts()}
          handleDelete={handleDelete} />
      </>
    )
  }
