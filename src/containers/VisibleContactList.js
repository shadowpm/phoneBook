import { connect } from 'react-redux'
import ContactListPresentationalComponent from '../components/ContactsListPresentationalComponent'

const mapStateToProps = state => ({
  contacts: state.contacts
})

export default connect(
  mapStateToProps,
)(ContactListPresentationalComponent)
