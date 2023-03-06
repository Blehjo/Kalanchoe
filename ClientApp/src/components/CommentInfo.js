import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { commentFetchAllStart } from "../store/comment/comment.action";
import { selectComments } from "../store/comment/comment.selector";
import { getSingleComment } from "../utils/api/comment";
import { utcConverter } from "../utils/date/Date";
import UserInfo from "./UserInfo";

const CommentInfo = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    
    useEffect(() => {
        getSingleComment(postId)
        .then((response) => dispatch(commentFetchAllStart(response.data)));
    }, [postId]);

    return (
        <Row style={{ justifyContent: 'center' }}>
        {comments?.length > 0 && comments?.map(({ commentId, commentValue, dateCreated, userId }) => (
            <Row style={{ marginBottom: '1rem' }} key={commentId} xs={1}>
                <Col xs={6}>
                    <Card.Text>{commentValue}</Card.Text>
                    <Card.Text>{utcConverter(dateCreated)}</Card.Text>
                </Col>
                <Col xs={6}>
                    <UserInfo userId={userId}/>
                </Col>
            </Row>
        ))}
        </Row>
    );
}

export default CommentInfo;