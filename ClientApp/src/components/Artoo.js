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
import { chatcommentFetchAllStart } from "../store/chatcomment/chatcomment.action";
import { selectChatCommentItems } from "../store/chatcomment/chatcomment.selector";

const defaultFormFields = {
  request: ''
}

const Artoo = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { id } = useParams();
  const chatComments = useSelector(selectChatCommentItems);
  const chats = useSelector(selectChatItems);
  const [choice, setChoice] = useState("Text");
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
    getChats()
    .then((response) => dispatch(chatFetchAllStart(response.data)));

    if (id !== null) {
      getSingleChatcomment(id)
      .then((response) => dispatch(chatcommentFetchAllStart(response.data)));
    }
  }, [id]);

  return (
    <Row xs={2}>
      <Col sm={3}>
        <div style={{ height: '94vh', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1 style={{}}>Artoo</h1>
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
      <Col sm={9}>
        <Form style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
        <Dropdown style={{ padding: '1rem' }}>
          <Dropdown.Toggle variant="light" id="dropdown">
            {choice}
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Text" value="text">Text</Dropdown.Item>
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
                      {convertImages(chatValue)}
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

/*
https://oaidalleapiprodscus.blob.core.windows.net/private/org-mrxlQQCsx1N1fi9bcX9B0lnV/user-BEPRQWPaqOxvIhojk2DPJTt0/img-SGcHeGMuc8N0Et0bcAhQEfyN.png?st=2023-03-01T15%3A45%3A55Z&se=2023-03-01T17%3A45%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-01T02%3A13%3A57Z&ske=2023-03-02T02%3A13%3A57Z&sks=b&skv=2021-08-06&sig=c9w97s5YzRybvT%2B1zrfpZAHd1YTv1YluYl5s5gpub4I%3D

https://oaidalleapiprodscus.blob.core.windows.net/private/org-mrxlQQCsx1N1fi9bcX9B0lnV/user-BEPRQWPaqOxvIhojk2DPJTt0/img-l2VREVSh98r6TP86P8yHhfMV.png?st=2023-03-01T15%3A13%3A12Z&se=2023-03-01T17%3A13%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-01T02%3A12%3A13Z&ske=2023-03-02T02%3A12%3A13Z&sks=b&skv=2021-08-06&sig=RJyC8vm/5LwUi0ZYJSMUx4bclPMIk5yn0yeHfdXhi7k%3D

https://oaidalleapiprodscus.blob.core.windows.net/private/org-mrxlQQCsx1N1fi9bcX9B0lnV/user-BEPRQWPaqOxvIhojk2DPJTt0/img-YaPDNT8j7UqFhYZuAzyjUOzM.png?st=2023-02-23T18%3A04%3A05Z&se=2023-02-23T20%3A04%3A05Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-23T02%3A52%3A52Z&ske=2023-02-24T02%3A52%3A52Z&sks=b&skv=2021-08-06&sig=uzZcz3C6I8WKWUlltgV80Q62NA8%2BdmkhU77xHdhSWOU

https://oaidalleapiprodscus.blob.core.windows.net/private/org-mrxlQQCsx1N1fi9bcX9B0lnV/user-BEPRQWPaqOxvIhojk2DPJTt0/img-srb0pLxKafba5CPsX1I34OjE.png?st=2023-03-01T15%3A26%3A19Z&se=2023-03-01T17%3A26%3A19Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-01T07%3A51%3A31Z&ske=2023-03-02T07%3A51%3A31Z&sks=b&skv=2021-08-06&sig=WQmh6nhbX%2BNNZOs//RrnJKVXq53rTVgAW4PQMzEU2C0%3D 
*/