import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Chat = (props) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          onClick={() => {
            props.onDelete(props.id);
          }}
          edge="end"
          aria-label="comments"
        >
          <DeleteIcon />
        </IconButton>
      }
      component={Link}
      to={`/chats/${props.id}`}
    >
      <ListItemText>{props.name}</ListItemText>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string,
};
