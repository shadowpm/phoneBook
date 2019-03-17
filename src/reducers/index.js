const initialState = {
  searchedText: '',
  contacts: []
};
const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            name: action.name,
            number: action.number,
            id: action.id
          }
        ]
      };
    case 'SEARCH':
      return {
        ...state,
        searchedText: action.searchedText
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
      };
    case 'EDIT':
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === action.id) {
            return {
              ...contact,
              name: action.editedContact.name,
              number: action.editedContact.number
            }
          } else {
            return contact
          }
        })
      }
    default:
      return state
  }
};

export default contacts
