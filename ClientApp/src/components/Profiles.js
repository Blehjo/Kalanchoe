import { useEffect, useState } from 'react';
import { Row, Col, Card, Modal, Form, Button } from 'react-bootstrap';
import { getUsers } from '../utils/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserprofileId, selectUserprofileItems } from '../store/userprofiles/userprofile.selector';
import { userprofileFetchAllStart, userprofileFetchSingleId } from '../store/userprofiles/userprofile.action';
import { addFollower, deleteFollower } from '../utils/api/follower';
import { addMessage } from '../utils/api/message';
import Cookies from 'js-cookie';
import { addMessagecomment } from '../utils/api/messagecomment';

const defaultFormFields = {
    messageValue: '',
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

export default function Profiles() {
    const dispatch = useDispatch();
    const userProfiles = useSelector(selectUserprofileItems);
    const userprofileId = useSelector(selectUserprofileId);
    const [show, setShow] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);

    const followMate = async (event) => {
        event.preventDefault();
        addFollower(event.target.id);
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        deleteFollower(event.target.id);
    }

    const resetForm = () => {
        setFormFields(defaultFormFields);
      }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFormFields({
                    ...formFields,
                    imageFile,
                    imageSource: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setFormFields({
                ...formFields,
                imageFile: null,
                imageSource: null
            })
        }
    }

    const handleAddMessage = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (userprofileId != null) {
          formData.append('messageId', userprofileId);
          formData.append('messageValue', formFields.messageValue);
          formData.append('mediaLink', formFields.mediaLink);
          formData.append('imageFile', formFields.imageFile);
          await addMessagecomment(formData);
          setFormFields(defaultFormFields);
          window.location.reload();
        }
    }

    const sendMessage = (event) => {
        event.preventDefault();
        setShow(!show);
        addMessage({ messageValue: event.target.id })
        .then((response) => response.data.length > 1 ? dispatch(userprofileFetchSingleId(response.data.messageId)) : dispatch(userprofileFetchSingleId(response.data[0].messageId)));
    }

    useEffect(() => {
        getUsers()
        .then((response) => dispatch(userprofileFetchAllStart(response.data)));
    }, [])

    return (
    <Row xs={2} md={2} lg={3} className="justify-content-center">
        {userProfiles?.map(({ userId, profileImage, firstName, about, username, imageSource }) => (
        <Col key={userId} className='mb-5'>
            <Card style={{ color: 'white', objectFit: 'cover', height: '30rem' }} className="bg-dark" key={userId}>
                <Card.Img style={{ height: '20rem', width: 'auto', objectFit: 'cover' }} variant="top" src={profileImage ? imageSource : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Row xs={2}>
                        <Col xs={9}>
                            <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`profile/${userId}`}>
                            <Card.Title>{username}</Card.Title>
                            </Card.Link>
                        </Col>
                    </Row>
                    <Card.Text>{firstName}</Card.Text>
                    <Card.Subtitle>{about}</Card.Subtitle>
                    <Card.Subtitle style={{ marginTop: '.2rem', cursor: 'pointer' }} id={username} onClick={(event) => sendMessage(event)}>Send Mesage</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
        ))}
        <Modal show={show} onHide={() => setShow(!show)}>
            <Modal.Header onClick={() => setShow(!show)} closeButton>Send a Message</Modal.Header>
            <Modal.Body>
            <Form className="messagemodalform" style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={handleAddMessage}>
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
                </Form>
            </Modal.Body>
        </Modal>
    </Row>
  );
}