import {
  offTrackingAddMessageWithThunk,
  offTrackingRemoveMessageWithThunk,
  onTrackingAddMessageWithThunk,
  onTrackingRemoveMessageWithThunk,
} from "../store/messages/actions";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getChatMessagesListById } from "../store/messages/selectors";
import { hasChatById } from "../store/chats/selectors";
import { useEffect } from "react";
import { createMessage } from "../helpers";
import { addMessageWithThunk } from "../store/messages/actions";
import { auth } from "../services/firebase";

export const withChatMessages = (Component) => {
  return (props) => {
    const profileName = useSelector((state) => state.profile.name);
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const user = auth.currentUser;

    const messageList = useSelector(getChatMessagesListById(chatId));
    const hasChat = useSelector(hasChatById(chatId));

    const onSendMessage = (text) => {
      const message = createMessage(user.uid, text);
      dispatch(addMessageWithThunk(message, chatId));
    };

    useEffect(() => {
      dispatch(onTrackingAddMessageWithThunk(chatId));
      dispatch(onTrackingRemoveMessageWithThunk(chatId));

      return () => {
        dispatch(offTrackingAddMessageWithThunk(chatId));
        dispatch(offTrackingRemoveMessageWithThunk(chatId));
      };
    }, [chatId]);

    return (
      <Component
        {...props}
        messageList={messageList}
        hasChat={hasChat}
        onSendMessage={onSendMessage}
      />
    );
  };
};
