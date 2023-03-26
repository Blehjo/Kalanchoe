import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';

import { addMessage, deleteMessage, getAllMessages, getSingleMessage } from "../utils/api/message";
import { addMessagecomment, getSingleMessagecomment } from "../utils/api/messagecomment";
import { selectMessageItems } from "../store/message/message.selector";
import { messageFetchAllStart } from "../store/message/message.action";
import { messagecommentFetchAllStart } from "../store/messagecomment/messagecomment.action";
import { selectMessageCommentItems } from "../store/messagecomment/messagecomment.selector";
import Cookies from "js-cookie";
import { getSingleUser } from "../utils/api/user";
import ImageModal from "./ImageModal";
import { Eye } from "react-bootstrap-icons";

const defaultFormFields = {
  messageValue: '',
  mediaLink: '',
  imageSource: null,
  imageFile: null
}

const Messages = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { id } = useParams();
  const messageComments = useSelector(selectMessageCommentItems);
  const messages = useSelector(selectMessageItems);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const length = messages.length;
  
  const resetForm = () => {
    setFormFields(defaultFormFields);
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  };

  const handleClick = (event) => {
    setShowModal(!showModal);
    setImage(event.target.id)
  }

  const showPreview = e => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = x => {
        setFormFields({
          ...formFields,
          imageFile,
          imageSource: x.target.result
        });
      }
      reader.readAsDataURL(imageFile);
    } else {
      setFormFields({
          ...formFields,
          imageFile: null,
          imageSource: null
      })
    }
  }
  
  const handleAddMessage = async () => {
    const formData = new FormData();
    if (id != null) {
      formData.append('messageId', id);
      formData.append('messageValue', formFields.messageValue);
      formData.append('mediaLink', formFields.mediaLink);
      formData.append('imageFile', formFields.imageFile);
      await addMessagecomment(formData)
    }
  }
  
  const handleChatDelete = (event) => {
    deleteMessage(event.target.id);
  }
  
  const sendMessage = async (event) => {
    event.preventDefault();
    await handleAddMessage();
    resetForm();
    window.location.reload();
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
    <Row xs={1} md={2}>
      <Col md={3}>
        <div className="messages"style={{ marginBottom: '1rem', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1>Messages</h1>
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
      <Col md={9}>
        <Form className="messageform" style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
          <Row style={{ padding: '2rem' }}>
            <Col>
              <div style={{ height: '80vh', overflowY: 'auto', borderRadius: '.2rem' }}>
              {messageComments?.length > 0 && messageComments?.map(({ messageCommentId, messageValue, mediaLink, imageSource }) => (
                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={messageCommentId}>
                      <div key={messageCommentId} style={{ textAlign: message.messageValue != username ? 'right' : 'left' }}>
                      {messageValue}
                      </div>
                      <div style={{ textAlign: message.messageValue != username ? 'right' : 'left' }}>
                        {mediaLink != null && <Eye id={imageSource} style={{ cursor: 'pointer' }} onClick={handleClick}/>}
                      </div> 
                      {/* <Col xs={1}> */}
                      {/* </Col> */}
                </div>
              ))}
              </div>
            </Col>
          <div style={{ position: 'absolute', bottom: '0' }} >
          <Row style={{ padding: '2rem' }} xs={2}>
            <Col xs={8} md={10}>
              <Form.Group className="mb-3" controlId="request">
                <Form.Control style={{ height: '.5rem' }} as="textarea" onChange={handleChange} value={formFields.messageValue} name="messageValue" placeholder="Send a message" />
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formMedia">
                <Form.Control onChange={showPreview} name="profileImage" as="input" accept="image/*" type="file" placeholder="Media" />
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Button variant="light" type="submit">
                Send
              </Button>
            </Col>
          </Row>
          </div>
          </Row>
        </Form>
      </Col>
      <Modal show={showModal} >
        <Modal.Header onClick={handleClick} closeButton/>
        <ImageModal image={image} />
      </Modal>
    </Row>
  );
}

export default Messages;