import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';

import { addMessage, deleteMessage, getAllMessages, getSingleMessage } from "../utils/api/message";
import { addMessagecomment, getSingleMessagecomment } from "../utils/api/messagecomment";
import { selectMessageItems } from "../store/message/message.selector";
import { messageFetchAllStart } from "../store/message/message.action";
import { messagecommentFetchAllStart } from "../store/messagecomment/messagecomment.action";
import { selectMessageCommentItems } from "../store/messagecomment/messagecomment.selector";
import Cookies from "js-cookie";
import { getSingleUser } from "../utils/api/user";

const defaultFormFields = {
  request: ''
}

const Messages = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { id } = useParams();
  const messageComments = useSelector(selectMessageCommentItems);
  const messages = useSelector(selectMessageItems);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const length = messages.length;
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { request } = formFields;
  
  const resetForm = () => {
    setFormFields(defaultFormFields);
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  };
  
  const handleAddMessage = () => {
    if (id != null) {
      addMessagecomment({ value: request, id: id })
    }
  }
  
  const handleChatDelete = (event) => {
    deleteMessage(event.target.id);
  }
  
  const sendMessage = async () => {
    handleAddMessage();
    resetForm();
  }
  
  useEffect(() => {
    getSingleUser(Cookies.get("user")).then((response) => setUsername(response.data.username));
    getAllMessages()
    .then((response) => dispatch(messageFetchAllStart(response.data)));

    if (id !== null) {
      getSingleMessagecomment(id)
      .then((response) => dispatch(messagecommentFetchAllStart(response.data)));

      getSingleMessage(id)
      .then((response) => setMessage(response.data));
    }
  }, [length, id]);

  return (
    <Row xs={2}>
      <Col sm={3}>
        <div style={{ height: '94vh', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1 style={{}}>Messages</h1>
          {messages?.length > 0 && messages?.map(({ messageId, messageValue }) => (
            <div style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={messageId}>
              <Row>
                <Col xs={9}>
                  <div id={messageId} onClick={(event) => navigate(`/messages/${event.target.id}`)}>
                  {messageValue}
                  </div>
                </Col>
                <Col>
                  <Button variant="light" id={messageId} onClick={handleChatDelete}><XCircle/></Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Col>
      <Col sm={9}>
        <Form style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
          <Row style={{ padding: '2rem' }}>
            <Col>
              <div style={{ height: '73vh', overflowY: 'auto', borderRadius: '.2rem' }}>
              {messageComments?.length > 0 && messageComments?.map(({ messageCommentId, messageValue }) => (
                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={messageCommentId}>
                      <div key={messageCommentId} style={{ textAlign: message.messageValue != username ? 'right' : 'left' }}>
                      {messageValue}
                      </div>
                </div>
              ))}
              </div>
            </Col>
          </Row>
          <Row style={{ padding: '2rem' }} xs={2}>
            <Col xs={10}>
              <Form.Group className="mb-3" controlId="request">
                <Form.Control type="text" onChange={handleChange} value={request} name="request" placeholder="Send a message" />
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Button variant="light" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Messages;