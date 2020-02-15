import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@material-ui/core";

const CreationModal = ({ open, createContact, closeModal }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setName("");
    setPhoneNumber("");
  }, [open]);
  return (
    <Dialog open={open}>
      <DialogContent style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          required
          label="Name"
          defaultValue=""
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          required
          label="Phone Number"
          defaultValue=""
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          className="contact-creation-btn"
          onClick={() => createContact(name, phoneNumber)}
        >
          Save and close
        </Button>
        <Button variant="contained" color="secondary" onClick={closeModal}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreationModal;
