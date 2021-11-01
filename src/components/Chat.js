import { ListItem, ListItemText } from "@mui/material";
import propTypes from "prop-types";

export const Chat = (props) => {
  return (
    <ListItem>
      <ListItemText>{props.name}</ListItemText>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string,
};
