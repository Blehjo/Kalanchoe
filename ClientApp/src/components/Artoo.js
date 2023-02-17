import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { addChat, deleteChat, getChats } from "../utils/api/chat";
import { addChatComment, getSingleChatcomment } from "../utils/api/chatcomment";

const Artoo = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [chatComments, setChatComments] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [request, setRequest] = useState('');
  const [aiResponse, setAiResponse] = useState();
  const { id } = useParams();
  console.log("Page ID: ", id);
  console.log("Request: ", request);
  console.log("AI Response: ", aiResponse);
  console.log("Chat ID: ", chatId);
  
  const handleAddChat = () => {
    if (id == null) {
      addChat({ title: request })
      .then((response) => setChatId(response.data.chatId));
      navigate(`/artoo/${chatId}`);
    }
  }

  const handleRequestChange = (event) => {
    event.preventDefault();
    setRequest(event.target.value);
  }

  const handleChatDelete = (event) => {
    deleteChat(event.target.id);
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    handleAddChat();
    await axios({
      method: 'post',
      url: 'https://localhost:7028/api/chatgpt/completion',
      data: {
        request: request
      },
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then((response) => setAiResponse(response.data));
    setRequest('');
  }

  const goToChat = (event) => {
    const chat = event.target.id;
    if (chat != null) {
      setChatId(chat);
      navigate(`/artoo/${chatId}`);
    }
  }
  
  useEffect(() => {
    getChats()
    .then((response) => setChats(response.data));
    addChatComment({ chatValue: aiResponse, chatId: chatId });

    getSingleChatcomment(id)
    .then((response) => setChatComments(response.data));
  }, [aiResponse, chatId, id]);

  return (
    <Row xs={2}>
      <Col sm={3}>
        <div style={{ height: '100vh', overflowY: 'auto', background: 'grey', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1 style={{}}>Archives</h1>
          {chats?.length > 0 && chats?.map(({ chatId, title }) => (
            <div style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatId}>
              <Row>
                <Col xs={9}>
                  <div id={chatId} onClick={goToChat}>
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
        <Form style={{ background: 'grey', borderRadius: '.2rem' }} onSubmit={sendMessage}>
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
                <Form.Control type="text" onChange={handleRequestChange} value={request} name="request" placeholder="Send a message" />
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