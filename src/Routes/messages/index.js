import { MessageList } from "../../components/MessageList";
import { MessageInput } from "../../components/MessageInput";
import { Redirect } from "react-router";
import { withChatMessages } from "../../hocs/withChatMessages";

export const MessagesRender = ({ messageList, hasChat, onSendMessage }) => {
  if (!hasChat) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <MessageList messageList={messageList} />
      <MessageInput onSend={onSendMessage} />
    </>
  );
};

export const Messages = withChatMessages(MessagesRender);
