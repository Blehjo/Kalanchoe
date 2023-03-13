import { useEffect, useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { commentFetchAllStart } from "../store/comment/comment.action";
import { selectComments } from "../store/comment/comment.selector";
import { getSingleComment } from "../utils/api/comment";
import { utcConverter } from "../utils/date/Date";
import ImageModal from "./ImageModal";
import UserInfo from "./UserInfo";
import { Eye } from "react-bootstrap-icons";

const CommentInfo = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const [showModal, setShowModal] = useState(false);
    const [imageSource, setImageSource] = useState(null);

    const handleClick = (event) => {
        setShowModal(!showModal);
        setImageSource(event.target.id)
    }

    useEffect(() => {
        getSingleComment(postId)
        .then((response) => dispatch(commentFetchAllStart(response.data)));
    }, [postId]);

    return (
        <Row style={{ justifyContent: 'left' }}>
        <div style={{ height: '140px', overflowY: 'auto', borderRadius: '.2rem' }}>
        {comments?.length > 0 && comments?.map(({ commentId, commentValue, dateCreated, userId, mediaLink, imageSource }) => (
            <Row style={{ marginBottom: '1rem', justifyContent: 'right' }} key={commentId} xs={1}>
                <Col xs={7}>
                    <Card.Text>{commentValue}</Card.Text>
                    <Row xs={2}>
                        <Col xs={5} lg={3}>
                            <Card.Text>{utcConverter(dateCreated)}</Card.Text>
                        </Col>
                        <Col xs={1}>
                            {mediaLink != null && <Eye id={imageSource} style={{ cursor: 'pointer' }} onClick={handleClick}/>}
                        </Col>
                    </Row>
                </Col>
                <Col xs={5} lg={5}>
                    <UserInfo userId={userId}/>
                </Col>
            </Row>
        ))}
        </div>
            <Modal show={showModal} onHide={handleClick}>
                <Modal.Header onClick={handleClick} closeButton/>
                <ImageModal image={imageSource} />
            </Modal>
        </Row>
    );
}

export default CommentInfo;