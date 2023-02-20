import { useEffect, useState, Fragment } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useNavigate } from "react-router";
import { deleteMessage, getAllMessages } from "../utils/api/message";

const MessagePanel = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [messageId, setMessageId] = useState(null);

    const goToMessage = (event) => {
        const message = event.target.id;
        if (message != null) {
            setMessageId(message);
            navigate(`/artoo/${messageId}`);
        }
    }

    const handleMessageDelete = (event) => {
        deleteMessage(event.target.id);
    }

    useEffect(() => {
        getAllMessages()
        .then((response) => setMessages(response.data));
    }, []);

    return (
        <Fragment>
            <div style={{ height: '716px', width: 'auto', backgroundColor: '#d4d4d4', borderRadius: '.2rem', justifyContent: 'center', margin: '1rem' }}>
                <h1>Messages</h1>
                <Row xs={1} xl={2}>
            {messages?.length > 0 && messages?.map(({ messageId, messageValue }) => (
                <div style={{ width: '16rem', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={messageId}>
                    <Row xs={2}>
                        <Col xs={9}>
                            <div id={messageId} onClick={goToMessage}>
                                {messageValue}
                            </div>
                        </Col>
                        <Col xs={1}>
                            <Button variant="light" id={messageId} onClick={handleMessageDelete}><XCircle/></Button>
                        </Col>
                    </Row>
                </div>
            ))}
            </Row>
            </div>
        </Fragment>
    );
}

export default MessagePanel;