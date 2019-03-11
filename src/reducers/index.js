let searchedText;
const initialState = {
  searchedText,
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
      return Object.assign({}, state, {searchedText: action.searchedText});
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
      };
    default:
      return state
  }
};

export default contacts
