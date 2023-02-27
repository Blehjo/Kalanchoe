import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { selectChatItems } from "../store/chat/chat.selector";
import { getSingleChat } from "../utils/api/chat";
import { useParams } from 'react-router';
import { chatFetchAllStart } from "../store/chat/chat.action";
import { selectChatCommentItems } from "../store/chatcomment/chatcomment.selector";
import { getSingleChatcomment } from "../utils/api/chatcomment";
import { chatcommentFetchAllStart } from "../store/chatcomment/chatcomment.action";
import { utcConverter } from "../utils/date/Date";
import UserInfo from "./UserInfo";

const SingleChat = () => {
    const dispatch = useDispatch();
    const { chatId, title, userId } = useSelector(selectChatItems);
    const comments = useSelector(selectChatCommentItems);
    const { id } = useParams();

    useEffect(() => {
        getSingleChatcomment(id)
        .then((response) => dispatch(chatcommentFetchAllStart(response.data)));

        getSingleChat(id)
        .then((response) => dispatch(chatFetchAllStart(response.data)));
    }, []);

    return (
        <Row>
            <Col>
            <Card>
                <Card.Title id={chatId}>{title}</Card.Title>
                <UserInfo userId={userId} />
                {comments?.length > 0 && comments?.map(({ chatCommentId, chatValue, dateCreated }) => (
                    <Card key={chatCommentId} style={{ margin: '2rem' }}>
                        <Card.Body key={chatCommentId}>{chatValue}</Card.Body>
                        <Card.Footer>Posted {utcConverter(dateCreated)}</Card.Footer>
                    </Card>
                ))}
            </Card>
            </Col>
        </Row>
    );
}

export default SingleChat;