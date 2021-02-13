import React, { useState } from "react";
import { Button, Container, Divider, IconButton, List, ListItem as MuiItem, Paper, TextField, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { Dictionary, ListItem } from "../../core/Types";
import { makeDetailFormStyles, makeDetailPageStyles } from "./Styles";
import { NumericSpacer } from "../../core/components/Spacers";
import { ArrowBack, Delete } from "@material-ui/icons";

interface BaseDetailsProps {
  editItem: (item: ListItem) => void;
  removeItem: (item: ListItem) => void;
}

interface MainProps extends BaseDetailsProps {
  itemList: Dictionary<ListItem>;
}

interface FormProps extends BaseDetailsProps {
  item: ListItem;
}

const TaskDetails = (props: FormProps) => {
  const { item } = props;
  const history = useHistory();

  const [title, setTitle] = useState(item.title);
  const [details, setDetails] = useState(item.details);
  const [isEdited, setIsEdited] = useState(false);

  const styles = makeDetailFormStyles();

  const handleDelete = () => {
    history.goBack();
    props.removeItem(props.item);
  }

  const handleEdit = (callback: () => void) => {
    setIsEdited(true);
    callback();
  }

  const handleSave = () => {
    history.goBack();
    props.editItem({
      ...props.item,
      title,
      details,
    });
  }

  return (
    <Container>
      <Container className={styles.header}>
        <Container className={styles.headerLeft}>
          <IconButton onClick={history.goBack}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h3">Details</Typography>
        </Container>
        <Container className={styles.headerRight}>
        {isEdited
          ? <Button onClick={handleSave}>SAVE CHANGES</Button>
          : null
        }
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Container>
      </Container>
      <List>
        <Divider />
        <MuiItem>
          <Typography variant="h6">Title: </Typography>
          <NumericSpacer size={4} />
          <TextField
            value={title}
            onChange={(e) => handleEdit(() => setTitle(e.currentTarget.value))}
          />
        </MuiItem>
        <NumericSpacer size={2} />
        <Divider />
        <MuiItem>
          <Typography variant="h6">Details: </Typography>
          <NumericSpacer size={4} />
          <TextField
            style={{ width: "100%" }}
            multiline
            value={details}
            onChange={(e) => handleEdit(() => setDetails(e.currentTarget.value))}
          />
        </MuiItem>
      </List>
    </Container>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const DetailsPage = (props: MainProps) => {
  const query: URLSearchParams = useQuery();
  const itemKey: string = `${query.get("key")}`;
  const targetItem: ListItem = props.itemList[itemKey];

  const styles = makeDetailPageStyles();

  return (
    <Paper className={styles.mainPaper}>
      {!targetItem
        ? <Typography variant="h4">Invalid Item Key</Typography>
        : <TaskDetails item={targetItem} removeItem={props.removeItem} editItem={props.editItem} />
      }
    </Paper>
  );
};