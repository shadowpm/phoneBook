import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

const AddContact = ({ dispatch }) => {
  let inputName
  let inputPhone

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!inputName.value.trim() || !inputPhone.value.trim()) {
            return
          }
          dispatch(addContact(inputName.value.trim(), inputPhone.value.trim()))
          inputName.value = ''
          inputPhone.value = ''
        }}
      >
        <input placeholder="Enter name" ref={node => (inputName = node)} />
        <input placeholder="Enter number" ref={node => (inputPhone = node)} />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  )
}

export default connect()(AddContact)
