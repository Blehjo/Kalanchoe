import { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { chatFetchAllStart } from "../store/chat/chat.action";
import { selectChatItems } from "../store/chat/chat.selector";
import { getAllChats, getChats } from "../utils/api/chat";
import { utcConverter } from "../utils/date/Date";
import { useNavigate } from 'react-router';
import UserInfo from "./UserInfo";

const ChatPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chats = useSelector(selectChatItems);

    const handleClickEvent = (event) => {
        navigate(`/chat/${event.target.id}`);
    }

    useEffect(() => {
        getAllChats()
        .then((response) => dispatch(chatFetchAllStart(response.data)));
    }, []);

    return (
        <Fragment>
            <h1>Chats</h1>
            <Row xl={3}>
                {chats?.length > 0 && chats?.map(({ title, chatId, dateCreated, userId }) => (
                <Col>
                    <Card style={{ margin: '1rem', cursor: 'pointer' }} key={chatId}>
                        <Card.Body style={{ padding: '1rem' }} id={chatId} onClick={handleClickEvent}>{title}</Card.Body>
                        <Card.Footer>
                            <Row xs={2}>
                                <Col xs={8}>
                                    <UserInfo userId={userId} />
                                </Col>
                                <Col xs={4}>
                                    {utcConverter(dateCreated)}
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                ))}
            </Row>
        </Fragment>
    );
}

export default ChatPage;
