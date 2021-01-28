import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { ItemList } from "../../core/components/ItemList";
import { CreationModal } from "../../core/components/Modal";
import { Dictionary, ListItem } from "../../core/Types";

interface MainPageProps {
  items: Dictionary<ListItem>;
  onItemClick: () => void;
  addItem: (item: ListItem) => void;
}

export const MainPage = (props: MainPageProps) => {
  const [showCreationModal, setShowCreationModal] = useState(false);

  const openModal = () => setShowCreationModal(true);
  const closeModal = () => setShowCreationModal(false);

  return (
    <Container style={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <ItemList items={props.items} onClick={props.onItemClick}/>
      <div style={{padding: 10}}/>
      <Button
        variant="contained"
        onClick={openModal}
      >
        Add Item
      </Button>
      <CreationModal
        open={showCreationModal}
        onClose={closeModal}
        onSubmit={props.addItem}
      />
    </Container>
  );
}