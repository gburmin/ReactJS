import { ListItem, ListItemText } from "@mui/material";
import propTypes from "prop-types";
import {Link} from 'react-router-dom';

export const Chat = (props) => {
  return (
    <ListItem component={Link} to={`/chats/${props.id}`}>
      <ListItemText>{props.name}</ListItemText>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string,
};
