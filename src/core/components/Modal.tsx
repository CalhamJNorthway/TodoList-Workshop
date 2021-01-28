import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { ListItem } from "../Types";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (item: ListItem) => void;
}

export const CreationModal = (props: ModalProps) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const {open, onClose, onSubmit} = props;

  const handleSubmit = () => {
    const item: ListItem = {
      key: "",
      title,
      details,
      createdAt: Date.now(),
    }
    
    onClose();
    onSubmit(item);
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={{ backgroundColor: "#FFFFF", flexBasis: "100%" }}
    >
      <DialogTitle>Create List Item</DialogTitle>
      <DialogContent style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <TextField
          label="Task Name"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div style={{ padding: 10 }} />
        <TextField
          label="Task Details"
          multiline
          value={details}
          onChange={(e) => setDetails(e.currentTarget.value)}
        />
        <div style={{ padding: 10 }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Disagree
          </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Agree
          </Button>
      </DialogActions>
    </Dialog>
  )
}