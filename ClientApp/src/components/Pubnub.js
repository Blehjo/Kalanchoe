import { MessageList, MessageInput, Chat } from "@pubnub/react-chat-components";
import { Col, Row } from 'react-bootstrap';
import Channels from "./Channels";
import Members from "./Members";

const currentChannel = "Default";
const theme = "light";

const Pubnub = () => {
  return (
      <Chat {...{ currentChannel, theme }}>
        <Row xs={3}>
          <Col xs={2}>
            <Channels/>
          </Col>
          <Col xs={8}>
            <div style={{ height: '80vh', overflowY: 'auto' }}>
              <MessageList />
            </div>
            <MessageInput />
          </Col>
          <Col xs={2}>
            <Members/>
          </Col>
        </Row>
      </Chat>
  );
}

export default Pubnub;