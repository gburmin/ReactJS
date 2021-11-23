import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { getChatList } from "../store/chats/selectors";
import {
  addChatWithThunk,
  offTrackingAddChatWithThunk,
  offTrackingRemoveChatWithThunk,
  onTrackingAddChatWithThunk,
  onTrackingRemoveChatWithThunk,
  removeChatWithThunk,
} from "../store/chats/actions";

import { createChat } from "../helpers";
import { removeMessagesByChatIdWithThunk } from "../store/messages/actions";

export const withChats = (Component) => {
  return (props) => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(() => {
      dispatch(addChatWithThunk(createChat("chat name")));
    }, []);

    const onDelete = useCallback((chatId) => {
      dispatch(removeChatWithThunk(chatId));
      dispatch(removeMessagesByChatIdWithThunk(chatId));
    }, []);

    useEffect(() => {
      dispatch(onTrackingAddChatWithThunk);
      dispatch(onTrackingRemoveChatWithThunk);

      return () => {
        dispatch(offTrackingAddChatWithThunk);
        dispatch(offTrackingRemoveChatWithThunk);
      };
    }, []);

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
