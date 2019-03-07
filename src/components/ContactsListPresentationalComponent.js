import React from 'react'
import ContactPresentationalComponent from './ContactPresentationalComponent'

const ContactListPresentationalComponent = ({contacts}) => (
  <ul>
    {contacts.map(contact => (
        <ContactPresentationalComponent name={contact.name} number={contact.number}/>
      )
    )}
  </ul>
)

export default ContactListPresentationalComponent
