import { Fragment, useEffect, useState } from "react";
import { Col, Row, Form, Button, Card, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { channelcommentFetchAllStart } from "../store/channelcomment/channelcomment.action";
import { selectChannelcommentItems } from "../store/channelcomment/channelcomment.selector";
import { communityFetchSingleStart } from "../store/community/community.action";
import { selectCommunities } from "../store/community/community.selector";
import { addChannelComment, getSingleChannelcomment } from "../utils/api/channelcomment";
import { getSingleCommunity } from "../utils/api/community";
import Channels from "./Channels";
import { Eye } from "react-bootstrap-icons";
import ImageModal from "./ImageModal";

const defaultFormFields = {
    channelCommentValue: '',
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

const Community = () => {
    const dispatch = useDispatch();
    const { communityId, groupName, description, mediaLink, userId, imageSource } = useSelector(selectCommunities);
    const channelComments = useSelector(selectChannelcommentItems);
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const { id, channelId } = useParams();
    const [formFields, setFormFields] = useState(defaultFormFields);

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
   
    const sendMessage = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('channelCommentValue', formFields.channelCommentValue);
        formData.append('mediaLink', formFields.mediaLink);
        formData.append('channelId', channelId);
        formData.append('imageFile', formFields.imageFile);
        await addChannelComment(formData);
        setFormFields(defaultFormFields);
    }

    useEffect(() => {
        getSingleCommunity(id)
        .then((response) => dispatch(communityFetchSingleStart(response.data)));
        getSingleChannelcomment(channelId)
        .then((response) => dispatch(channelcommentFetchAllStart(response.data)));
    }, [channelId]);

    return(
        <Fragment>
            <Row xs={2}>
                <Col xs={1}>
                    <Card.Img style={{ margin: '.5rem', borderRadius: '.5rem', height: '2rem', width: '2rem', objectFit: 'cover' }} src={imageSource} />
                </Col>
                <Col xs={9}>
                    <h1 className="channelname">{groupName}</h1>
                </Col>
            </Row>
            <Row xs={1} md={2}>
                <Col md={3}>
                <div style={{ marginBottom: '1rem' }}>
                    <Channels/>
                </div>
                </Col>
                <Col md={9}>
                    <Form className="channelform" style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
                    <Row style={{ padding: '2rem' }}>
                        <Col>
                            <div style={{ overflowY: 'auto', borderRadius: '.2rem', height: '80vh', overflowY: 'auto'  }}>
                            {channelComments?.length > 0 && channelComments?.map(({ channelCommentId, channelCommentValue, imageSource, mediaLink }) => (
                                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={channelCommentId}>
                                    <div key={channelCommentId}>
                                    {channelCommentValue}
                                    </div>
                                    <Col xs={1}>
                                        {mediaLink != null && <Eye id={imageSource} style={{ cursor: 'pointer' }} onClick={handleClick}/>}
                                    </Col>
                                </div>
                            ))}
                            </div>
                        </Col>
                        <div style={{ position: 'absolute', bottom: '0' }} >
                            <Row style={{ padding: '2rem' }} xs={2}>
                                <Col xs={8} md={10}>
                                <Form.Group className="mb-3" controlId="request">
                                    <Form.Control style={{ height: '.5rem' }} as="textarea" onChange={handleChange} value={formFields.channelCommentValue} name="channelCommentValue" placeholder="Send a message" />
                                </Form.Group>
                                <Form.Group className="col-12 mb-3" controlId="formMedia">
                                    <Form.Control onChange={showPreview} name="profileImage" as="input" accept="image/*" type="file" placeholder="Media" />
                                </Form.Group>
                                </Col>
                                <Col xs={2}>
                                <Button style={{ height: '100%' }} variant="light" type="submit">
                                    Send
                                </Button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    </Form>
                </Col>
            </Row>
            <Modal show={showModal} >
                <Modal.Header onClick={handleClick} closeButton/>
                <ImageModal image={image} />
            </Modal>
        </Fragment >
    );
}

export default Community;
