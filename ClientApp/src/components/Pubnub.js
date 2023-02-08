import { MessageList, MessageInput, Chat } from "@pubnub/react-chat-components";
import { Col, Row } from 'react-bootstrap';
import Channels from "./Channels";
import Members from "./Members";

const currentChannel = "Default";
const theme = "light";

const Pubnub = () => {
  return (
    <Row xs={1}>
      <Chat {...{ currentChannel, theme }}>
        {/* <Col xs={2}>
          <Channels/>
        </Col> */}
        <Col xs={10}>
          <div style={{ height: '80vh', overflowY: 'auto' }}>
            <MessageList />
          </div>
          <MessageInput />
        </Col>
        <Col xs={2}>
          <Members/>
        </Col> 
      </Chat>
    </Row>
  );
}

export default Pubnub;