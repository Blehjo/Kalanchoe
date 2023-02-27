import { useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { messageFetchAllStart } from "../store/message/message.action";
import { selectMessageItems } from "../store/message/message.selector";
import { deleteMessage, getAllMessages } from "../utils/api/message";

const MessagePanel = () => {
    const dispatch = useDispatch();
    const messages = useSelector(selectMessageItems);
    const navigate = useNavigate();

    const goToMessage = (event) => {
        const message = event.target.id;
        if (message != null) {
            navigate(`/messages/${message}`);
        }
    }

    const handleMessageDelete = (event) => {
        deleteMessage(event.target.id);
    }

    useEffect(() => {
        getAllMessages()
        .then((response) => dispatch(messageFetchAllStart(response.data)));
    }, []);

    return (
        <div style={{ textAlign: 'center', height: '716px', width: 'auto', backgroundColor: '#d4d4d4', borderRadius: '.2rem', justifyContent: 'center', margin: '1rem' }}>
            <h1>Messages</h1>
            {messages?.length > 0 && messages?.map(({ messageId, messageValue }) => (
                <div style={{ cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={messageId}>
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
        </div>
    );
}

export default MessagePanel;