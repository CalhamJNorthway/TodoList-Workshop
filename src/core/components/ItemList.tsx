import { Button, Divider, List, ListItem as MuiItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { Dictionary, ListItem } from "../Types";

interface ItemListProps {
  items: Dictionary<ListItem>;
  onClick: () => void;
}

export const ItemList = (props: ItemListProps) => {

  const values = Object.values(props.items);

  return (
    <List
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#FFFF",
        borderRadius: 10,
        minHeight: 200,
        textAlign: "center",
        width: "50%"
      }}
    >
      <Typography variant="h4" color="textSecondary">TO-DO</Typography>
      {values.length <= 0
      ? <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}><Typography variant="h6" color="textSecondary">Nothing To Do</Typography></div>
      : values.map((item: ListItem) => (
        <>
        <MuiItem key={item.key}>
          <ListItemText style={{color: "#000000"}}>{item.title}</ListItemText>
          <Button
            variant={"contained"}
            onClick={props.onClick}
          >
            Details
          </Button>
        </MuiItem>
        <Divider/>
        </>
      ))}
    </List>
  );
}