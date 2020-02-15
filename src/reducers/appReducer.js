const appReducer = (
  state = { contacts: [], isModalCreationOpen: false },
  action
) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: action.id,
            name: action.name,
            phone_number: action.phone_number
          }
        ],
        isModalCreationOpen: false
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
      };

    case "OPEN_CREATION_MODAL":
      return {
        ...state,
        isModalCreationOpen: true
      };
    case "CLOSE_CREATION_MODAL":
      return {
        ...state,
        isModalCreationOpen: false
      };
    default:
      return state;
  }
};
export default appReducer;
