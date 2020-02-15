import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  createContact,
  deleteContact,
  openCreationModal,
  closeCreationModal
} from "./actions/index";
import CreationModal from "./components/CreationModal";
import { Button } from "@material-ui/core";
import ContactsList from "./components/ContactsList";

const App = ({
  isCreationModalOpen,
  closeCreationModal,
  openCreationModal,
  deleteContact,
  createContact,
  contacts
}) => {
  return (
    <div className="App">
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
      <Button
        className="open-modal-btn"
        onClick={openCreationModal}
        variant="contained"
      >
        Create contact
      </Button>
      <CreationModal
        open={isCreationModalOpen}
        createContact={createContact}
        closeModal={closeCreationModal}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  isCreationModalOpen: state.isModalCreationOpen
});

const mapDispatchToProps = dispatch => ({
  createContact: (name, phone_number) =>
    dispatch(createContact(name, phone_number)),
  deleteContact: id => dispatch(deleteContact(id)),
  openCreationModal: () => dispatch(openCreationModal()),
  closeCreationModal: () => dispatch(closeCreationModal())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
