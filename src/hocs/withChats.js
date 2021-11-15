import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { getChatList } from "../store/chats/selectors";
import { addChat, removeChat } from "../store/chats/actions";
import { removeMessagesByChatId } from "../store/messages/actions";
import { createChat } from "../helpers";

export const withChats = (Component) => {
  return (props) => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(() => {
      dispatch(addChat(createChat("chat name")));
    }, [dispatch]);

    const onDelete = useCallback(
      (chatId) => {
        dispatch(removeChat(chatId));
        dispatch(removeMessagesByChatId(chatId));
      },
      [dispatch]
    );

    return (
      <Component
        {...props}
        chats={chats}
        onCreate={onCreate}
        onDelete={onDelete}
      />
    );
  };
};
