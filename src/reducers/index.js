const initialState = {
  contacts: []
}
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
      }
    default:
      return state
  }
}

export default contacts
