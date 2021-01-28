import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useLocation, useParams } from "react-router-dom";
import { Dictionary, ListItem } from "../../core/Types";

interface DetailsPageProps {
  itemList: Dictionary<ListItem>;
  editItem: (item: ListItem) => void;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export const DetailsPage = (props: DetailsPageProps) => {
  const query: URLSearchParams = useQuery();
  const itemKey: string = `${query.get("key")}`;
  const targetItem: ListItem = props.itemList[itemKey];

  console.log(itemKey)

  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 500,
        minWidth: 800,
        padding: 20,
      }}
    >
      {!targetItem
        ? <Typography variant="h4">Invalid Item Key</Typography>
        : <Typography>{`${JSON.stringify(props.itemList[itemKey])}`}</Typography>
      }
    </Paper>
  );
};