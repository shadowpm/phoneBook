//search - delete - edit
let nextContactId = 0;

export const addContact = (name, number) => ({
  type: 'ADD_CONTACT',
  id: nextContactId++,
  name,
  number
});
