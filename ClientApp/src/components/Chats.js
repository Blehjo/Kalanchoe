import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat, getChats, getUsersChats } from "../utils/api/chat";
import { addChatComment, getSingleChatcomment } from "../utils/api/chatcomment";
import { toggle } from "../utils/artootoggle";
import { selectChatItems } from "../store/chat/chat.selector";
import { chatFetchAllStart } from "../store/chat/chat.action";
import { chatcommentFetchAllStart } from "../store/chatcomment/chatcomment.action";
import { selectChatCommentItems } from "../store/chatcomment/chatcomment.selector";

const defaultFormFields = {
  request: ''
}

const Chats = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { id } = useParams();
  const chatComments = useSelector(selectChatCommentItems);
  const chats = useSelector(selectChatItems);
  const [choice, setChoice] = useState("Artoo");
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { request } = formFields;

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
      .then((response) => addChatComment({ chatValue: request, chatId: response.data.chatId }))
      .then((response) => navigate(`/artoo/${response.data.chatId}`));
    }
  }

  const handleChatDelete = (event) => {
    deleteChat(event.target.id);
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    addChatComment({ chatValue: request, chatId: id });
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
    .then((response) => addChatComment({ chatValue: response.data, chatId: id }));
    resetForm();
    window.location.reload();
  }

  const convertImages = (value) => {
    if (value.startsWith("https")) {
      const images = value.split("%3D");
      images.pop()
      return <div style={{ textAlign: 'center'}}>
        {images?.map((image) => (<img style={{ margin: '1rem', height: '20rem', width: '20rem', objectFit: 'fit' }} key={images.indexOf(image)} src={image + "%3D"} />))}
      </div>
    }
    return value;
  }
  
  useEffect(() => {
    getUsersChats()
    .then((response) => dispatch(chatFetchAllStart(response.data)));

    if (id !== null) {
      getSingleChatcomment(id)
      .then((response) => dispatch(chatcommentFetchAllStart(response.data)));
    }
  }, [id]);

  return (
    <Row xs={1} md={2}>
      <Col md={3}>
        <div className="artoo" style={{ marginBottom: '1rem', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1 >Artoo</h1>
          {chats?.length > 0 && chats?.map(({ chatId, title }) => (
            <div style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatId}>
              <Row>
                <Col xs={9}>
                  <div id={chatId} onClick={(event) => navigate(`/artoo/${event.target.id}`)}>
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
      <Col md={9}>
        <Form className="artooform" style={{ position: 'relative', background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
        <Dropdown style={{ padding: '1rem' }}>
          <Dropdown.Toggle variant="light" id="dropdown">
            {choice}
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Artoo" value="artoo">Artoo</Dropdown.Item>
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Text" value="text">Text</Dropdown.Item>
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Code" value="code">Code</Dropdown.Item>
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Art" value="art">Art</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <Row style={{ padding: '2rem', height: '80vh', overflowY: 'auto' }}>
            <Col>
              {chatComments?.length > 0 && chatComments?.map(({ chatCommentId, chatValue }) => (
                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatCommentId}>
                      <div key={chatValue}>
                      {convertImages(chatValue)}
                      </div>
                </div>
              ))}
            </Col>
          <div style={{ position: 'absolute', bottom: '0' }} >
          <Row  xs={2}>
            <Col xs={8} md={10}>
              <Form.Group className="mb-3" controlId="request">
                <Form.Control style={{ height: '.5rem' }} as="textarea" onChange={handleChange} value={request} name="request" placeholder="Send a message" />
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Button variant="light" type="submit">
                Go
              </Button>
            </Col>
          </Row>
          </div>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Chats;