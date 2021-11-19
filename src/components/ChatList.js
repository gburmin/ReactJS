import { Chat } from "./Chat";
import { List } from "@mui/material";
import propTypes from "prop-types";

export const ChatList = ({ onDelete, list }) => {
  return (
    <List>
      {list.map((item) => (
        <Chat key={item.id} {...item} onDelete={onDelete} />
      ))}
    </List>
  );
};

ChatList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string,
    })
  ),
};
