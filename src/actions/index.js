//delete - edit
let nextContactId = 0;

export const addContact = (name, number) => ({
  type: 'ADD_CONTACT',
  id: nextContactId++,
  name,
  number
});

export const search = (searchedText) => ({
  type: 'SEARCH',
  searchedText
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  id
});
