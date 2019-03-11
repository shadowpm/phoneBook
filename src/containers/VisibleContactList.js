import {connect} from 'react-redux'
import ContactListPresentationalComponent from '../components/ContactsListPresentationalComponent'

const searchList = state => {
  if (state.searchedText) {
    return state.contacts.filter(contact => contact.name.includes(state.searchedText) || contact.number.includes(state.searchedText))
  } else {
    return state.contacts
  }
}

const mapStateToProps = state => ({
  contacts: searchList(state)
})

export default connect(
  mapStateToProps,
)(ContactListPresentationalComponent)
