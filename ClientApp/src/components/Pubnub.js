import { MessageList, MessageInput } from "@pubnub/react-chat-components";
import { Chat } from "@pubnub/react-chat-components";

const currentChannel = "Default";
const theme = "light";

const Pubnub = () => {
  return (
      <Chat {...{ currentChannel, theme }}>
        <MessageList />
        <MessageInput />
      </Chat>
  );
}

export default Pubnub;