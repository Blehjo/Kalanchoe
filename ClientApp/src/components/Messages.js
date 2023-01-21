import { Fragment } from "react";
import { MessageList, Chat } from "@pubnub/react-chat-components";

const Messages = () => {
    return(
        <Fragment>
            <h1>Messages</h1>
            <div style={{ width: '80vw', height: '80vh', background: 'black' }}>
            </div>
        </Fragment >
    );
}

export default Messages;
