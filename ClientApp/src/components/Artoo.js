import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat, getChats } from "../utils/api/chat";
import { addChatComment, getSingleChatcomment } from "../utils/api/chatcomment";
import { toggle } from "../utils/artootoggle";
import { selectChatItems } from "../store/chat/chat.selector";
import { chatFetchAllStart } from "../store/chat/chat.action";
import Cookies from 'js-cookie'
import { chatcommentFetchAllStart } from "../store/chatcomment/chatcomment.action";
import { selectChatCommentItems } from "../store/chatcomment/chatcomment.selector";

const defaultFormFields = {
  request: '',
  dropdown: ''
}

const Artoo = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { id } = useParams();
  const chatComments = useSelector(selectChatCommentItems);
  const chats = useSelector(selectChatItems);
  const length = chats.length;
  const [chatId, setChatId] = useState(null);
  const [choice, setChoice] = useState("Text");
  const [aiResponse, setAiResponse] = useState(null);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { request, dropdown } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value })
  };
  
  const handleAddChat = () => {
    if (id == null) {
      addChat({ title: request })
      .then((response) => setChatId(response.data.chatId));
      navigate(`/artoo/${chatId}`);
    }
  }

  const handleChatDelete = (event) => {
    deleteChat(event.target.id);
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    handleAddChat();
    await axios({
      method: 'post',
      url: toggle(choice),
      data: {
        request: request
      },
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then((response) => setAiResponse(response.data));
    resetForm();
  }
  
  useEffect(() => {
    if (aiResponse != null && chatId != null) {
      addChatComment({ chatValue: aiResponse, chatId: chatId });
    }

    if (chatId != null) {
      navigate(`/artoo/${chatId}`);
    }

    getChats()
    .then((response) => dispatch(chatFetchAllStart(response.data)));

    if (chatId !== null) {
      getSingleChatcomment(chatId)
      .then((response) => dispatch(chatcommentFetchAllStart(response.data)));
    }
  }, [aiResponse, chatId, length]);

  return (
    <Row xs={2}>
      <Col sm={3}>
        <div style={{ height: '94vh', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1 style={{}}>Archives</h1>
          {chats?.length > 0 && chats?.map(({ chatId, title }) => (
            <div style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatId}>
              <Row>
                <Col xs={9}>
                  <div id={chatId} onClick={(event) => setChatId(event.target.id)}>
                  {title}
                  </div>
                </Col>
                <Col>
                  <Button variant="light" id={chatId} onClick={handleChatDelete}><XCircle/></Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Col>
      <Col sm={9}>
        <Form style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
        <Dropdown style={{ padding: '1rem' }}>
          <Dropdown.Toggle variant="light" id="dropdown">
            {choice}
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Text" value="text" active>Text</Dropdown.Item>
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Code" value="code">Code</Dropdown.Item>
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Art" value="art">Art</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <Row style={{ padding: '2rem' }}>
            <Col>
              <div style={{ height: '73vh', overflowY: 'auto', borderRadius: '.2rem' }}>
              {chatComments?.length > 0 && chatComments?.map(({ chatCommentId, chatValue }) => (
                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatCommentId}>
                      <div key={chatValue}>
                      {chatValue}
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

export default Artoo;