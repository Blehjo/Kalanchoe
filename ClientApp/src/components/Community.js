import { Fragment, useEffect, useState } from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import { addChannelComment, getSingleChannelcomment } from "../utils/api/channelcomment";
import Channels from "./Channels";

const Community = () => {
    const [request, setRequest] = useState();
    const [channelComments, setChannelComments] = useState();
    const { channelId } = useParams();

    const handleChange = (event) => {
        setRequest(event.target.id);
    }
   
    const sendMessage = async (event) => {
        event.preventDefault();
        addChannelComment({ channelCommentValue: request })
    }

    useEffect(() => {
        getSingleChannelcomment(channelId)
        .then((response) => setChannelComments(response.data))
    }, []);

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
