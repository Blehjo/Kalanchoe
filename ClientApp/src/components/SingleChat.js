import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { chatFetchAllStart } from "../store/chat/chat.action";
import { selectChatItems } from "../store/chat/chat.selector";
import { chatcommentFetchAllStart } from "../store/chatcomment/chatcomment.action";
import { selectChatCommentItems } from "../store/chatcomment/chatcomment.selector";
import { getSingleChat } from "../utils/api/chat.api";
import { getSingleChatcomment } from "../utils/api/chatcomment.api";
import { utcConverter } from "../utils/date/Date";
import ChatUserInfo from "./ChatUserInfo";

const SingleChat = () => {
    const dispatch = useDispatch();
    const { chatId, title, userId } = useSelector(selectChatItems);
    const comments = useSelector(selectChatCommentItems);
    const { id } = useParams();

    const convertImages = (value) => {
    if (value.startsWith("https")) {
      const images = value.split("%3D");
      images.pop()
      return images.map((image) => (<img style={{ margin: '1rem', height: '30rem', width: '30rem', objectFit: 'fit' }} key={images.indexOf(image)} src={image + "%3D"} />));
    }
    return value;
  }

    useEffect(() => {
        getSingleChatcomment(id)
        .then((response) => dispatch(chatcommentFetchAllStart(response.data)));

        getSingleChat(id)
        .then((response) => dispatch(chatFetchAllStart(response.data)));
    }, [id]);

    return (
        <Row>
            <Col>
            <Card>
                <Row style={{ marginLeft: '1rem', justifyContent: 'center' }}>
                <Card.Title style={{ marginTop: '1rem' }} id={chatId}>{title}</Card.Title>
                <ChatUserInfo userId={userId != null && userId} />
                </Row>
                {comments?.length > 0 && comments?.map(({ chatCommentId, chatValue, dateCreated }) => (
                    <Card key={chatCommentId} style={{ margin: '2rem' }}>
                        <Card.Body key={chatCommentId}>{convertImages(chatValue)}</Card.Body>
                        <Card.Footer>Posted {utcConverter(dateCreated)}</Card.Footer>
                    </Card>
                ))}
            </Card>
            </Col>
        </Row>
    );
}

export default SingleChat;