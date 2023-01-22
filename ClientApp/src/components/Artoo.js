import { MessageList, MessageInput } from "@pubnub/react-chat-components";
import { Chat } from "@pubnub/react-chat-components";
import { Col, Row } from "react-bootstrap";

const currentChannel = "Default";
const theme = "light";

const Artoo = () => {
  return (
      <Chat {...{ currentChannel, theme }}>
        <Row>
            <Col style={{ height: '70vh' }}>
                <h1>Artoo</h1>
                <div style={{ height: '70vh', overflowY: 'auto' }}>
                  <MessageList />
                </div>
                <MessageInput />
            </Col>
        </Row>
      </Chat>
  );
}

export default Artoo;