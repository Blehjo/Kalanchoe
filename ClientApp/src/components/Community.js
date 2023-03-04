import { Fragment, useEffect, useState } from "react";
import { Col, Row, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { channelcommentFetchAllStart } from "../store/channelcomment/channelcomment.action";
import { selectChannelcommentItems } from "../store/channelcomment/channelcomment.selector";
import { communityFetchSingleStart } from "../store/community/community.action";
import { selectCommunities } from "../store/community/community.selector";
import { addChannelComment, getSingleChannelcomment } from "../utils/api/channelcomment";
import { getSingleCommunity } from "../utils/api/community";
import Channels from "./Channels";

const defaultFormFields = {
    request: ''
}

const Community = () => {
    const dispatch = useDispatch();
    const { communityId, groupName, description, mediaLink, userId } = useSelector(selectCommunities);
    const channelComments = useSelector(selectChannelcommentItems);
    const { id, channelId } = useParams();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { request } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
   
    const sendMessage = async () => {
        addChannelComment({ channelcommentValue: request, channelId: channelId });
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
                    <Card.Img style={{ marginTop: '.2rem', borderRadius: '.5rem', height: '3rem', width: '3rem', objectFit: 'cover' }} src={mediaLink} />
                </Col>
                <Col xs={2}>
                    <h1>{groupName}</h1>
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
                            <div style={{ overflowY: 'auto', borderRadius: '.2rem' }}>
                            {channelComments?.length > 0 && channelComments?.map(({ channelCommentId, channelCommentValue }) => (
                                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={channelCommentId}>
                                    <div key={channelCommentId}>
                                    {channelCommentValue}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </Col>
                        <div style={{ position: 'absolute', bottom: '0' }} >
                            <Row style={{ padding: '2rem' }} xs={2}>
                                <Col xs={8} md={10}>
                                <Form.Group className="mb-3" controlId="request">
                                    <Form.Control type="text" onChange={handleChange} value={request} name="request" placeholder="Send a message" />
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
            </Row>
        </Fragment >
    );
}

export default Community;
