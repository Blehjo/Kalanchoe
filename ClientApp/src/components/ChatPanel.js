import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { addChat, deleteChat, getChats } from "../utils/api/chat";
import { addChatComment, getSingleChatcomment } from "../utils/api/chatcomment";

const ChatPanel = () => {
    const navigate = useNavigate();
    const [chats, setChats] = useState([]);
    const [chatComments, setChatComments] = useState([]);
    const [chatId, setChatId] = useState(null);
    const [request, setRequest] = useState('');
    const [aiResponse, setAiResponse] = useState();
    const { id } = useParams();

    const goToChat = (event) => {
        const chat = event.target.id;
        if (chat != null) {
          setChatId(chat);
          navigate(`/artoo/${chatId}`);
        }
    }

    const handleChatDelete = (event) => {
        deleteChat(event.target.id);
    }

    useEffect(() => {
        getChats()
        .then((response) => setChats(response.data));
        addChatComment({ chatValue: aiResponse, chatId: chatId });
    
        if (id != null) {
          getSingleChatcomment(id)
          .then((response) => setChatComments(response.data));
        }
      }, [aiResponse, id]);

    return (
            <div style={{ height: '350px', width: 'auto%', backgroundColor: 'grey', borderRadius: '.2rem', textAlign: 'center', margin: '1rem' }}>
                <h1>Chat Archives</h1>
                <Row xs={2}>
                {chats?.length > 0 && chats?.map(({ chatId, title }) => (
                    <div style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatId}>
                        <div>
                        <Row>
                            <Col xs={9}>
                            <div id={chatId} onClick={goToChat}>
                            {title}
                            </div>
                            </Col>
                            <Col>
                                <Button variant="light" id={chatId} onClick={handleChatDelete}><XCircle/></Button>
                            </Col>
                        </Row>
                        </div>
                    </div>
                ))}
                </Row>
            </div>
    )
}

export default ChatPanel;