let nextContactId = 0;
export const createContact = (name, phone_number) => {
  return {
    type: "CREATE_CONTACT",
    id: nextContactId++,
    name,
    phone_number
  };
};
export const deleteContact = id => ({
  type: "DELETE_CONTACT",
  id
});
export const openCreationModal = () => ({
  type: "OPEN_CREATION_MODAL"
});
export const closeCreationModal = () => ({
  type: "CLOSE_CREATION_MODAL"
});
