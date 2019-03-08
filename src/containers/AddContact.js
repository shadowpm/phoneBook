import React from 'react'
import {connect} from 'react-redux'
import {addContact, search} from '../actions'

const AddContact = ({dispatch}) => {
  let inputName
  let inputPhone
  let inputSearch

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
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!inputSearch.value.trim()) {
              return
            }
            dispatch(search(inputSearch.value.trim()))
            inputSearch.value = ''
          }}
        >
          <input placeholder="Enter contact name/number" ref={node => (inputSearch = node)}/>
          <button type="submit">Search</button>
          <input placeholder="Enter name" ref={node => (inputName = node)}/>
          <input placeholder="Enter number" ref={node => (inputPhone = node)}/>
          <button type="submit">Add Contact</button>
        </form>
      </form>
    </div>
  )
};

export default connect()(AddContact)
