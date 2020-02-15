import React from "react";
import { List, ListItem, Button } from "@material-ui/core";

const ContactsList = ({ contacts, deleteContact }) => {
  const renderListItems = () => {
    return contacts.map(contact => {
      return (
        <ListItem
          style={{ display: "flex", justifyContent: "center" }}
          key={contact.id}
        >
          <p>
            {contact.name} / {contact.phone_number}
          </p>
          <Button
            color="secondary"
            variant="contained"
            className="delete-contact-btn"
            onClick={() => deleteContact(contact.id)}
          >
            Delete contact
          </Button>
        </ListItem>
      );
    });
  };
  return <List>{renderListItems()}</List>;
};

export default ContactsList;
