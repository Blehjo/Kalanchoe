import { Fragment, useEffect, useState } from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { channelcommentFetchAllStart } from "../store/channelcomment/channelcomment.action";
import { selectChannelcommentItems } from "../store/channelcomment/channelcomment.selector";
import { addChannelComment, getSingleChannelcomment } from "../utils/api/channelcomment";
import Channels from "./Channels";

const defaultFormFields = {
    request: ''
}

const Community = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const channelComments = useSelector(selectChannelcommentItems);
    const { id, channelId } = useParams();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { request } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
   
    const sendMessage = async () => {
        console.log(channelId);
        addChannelComment({ channelcommentValue: request, channelId: channelId });
        setFormFields(defaultFormFields);
    }

    useEffect(() => {
        getSingleChannelcomment(channelId)
        .then((response) => dispatch(channelcommentFetchAllStart(response.data)));
    }, [channelId]);

    return(
        <Fragment>
            <h1>Community</h1>
            <Row>
                <Col xs={3}>
                    <Channels/>
                </Col>
                <Col sm={9}>
                    <Form style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
                    <Row style={{ padding: '2rem' }}>
                        <Col>
                        <div style={{ height: '73vh', overflowY: 'auto', borderRadius: '.2rem' }}>
                        {channelComments?.length > 0 && channelComments?.map(({ channelCommentId, channelCommentValue }) => (
                            <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={channelCommentId}>
                                <div key={channelCommentId}>
                                {channelCommentValue}
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
        </Fragment >
    );
}

export default Community;
