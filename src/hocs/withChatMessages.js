import { sendMessageWithThunk } from "../store/messages/actions";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getChatMessagesById } from "../store/messages/selectors";
import { hasChatById } from "../store/chats/selectors";

export const withChatMessages = (Component) => {
  return (props) => {
    const profileName = useSelector((state) => state.profile.name);
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));

    const onSendMessage = (text) => {
      dispatch(sendMessageWithThunk(profileName, text, chatId));
    };

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
