import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import { useNavigate, useParams } from "react-router";
import { deleteChat, getChats } from "../utils/api/chat.api";

const ChatPanel = () => {
    const navigate = useNavigate();
    const [chats, setChats] = useState([]);
    const { id } = useParams();

    const goToChat = (event) => {
        const chat = event.target.id;
        if (chat != null) {
          navigate(`/artoo/${chat}`);
        }
    }

    const handleChatDelete = (event) => {
        deleteChat(event.target.id);
    }

    useEffect(() => {
        getChats()
        .then((response) => setChats(response.data));
    }, [id]);

    return (
        <div style={{ height: '350px', backgroundColor: '#d4d4d4', padding: '1rem', borderRadius: '.2rem', textAlign: 'center', overflowY: 'auto' }}>
            <h1>Chats</h1>
            {chats?.length > 0 && chats?.map(({ chatId, title }) => (
                <div style={{ cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatId}>
                    <Row xs={2}>
                        <Col xs={10}>
                            <div id={chatId} onClick={goToChat}>
                                {title}
                            </div>
                        </Col>
                        <Col xs={1}>
                            <Button variant="light" id={chatId} onClick={handleChatDelete}><XCircle/></Button>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default ChatPanel;