import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { postFetchAllStart, postFetchSingleStart } from "../store/post/post.action";
import { selectPosts, selectSinglePost } from "../store/post/post.selector";
import { addComment } from "../utils/api/comment.api";
import { getSinglePost, getUserPosts } from "../utils/api/post.api";
import { utcConverter } from "../utils/date/Date";
import CommentInfo from "./CommentInfo";

const UserPostsTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector(selectPosts);
    const [commentValue, setCommentValue] = useState('');
    const { postId, mediaLink, imageSource, postValue, dateCreated } = useSelector(selectSinglePost);
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (event) => {
        getSinglePost(event.target.id)
        .then((response) => dispatch(postFetchSingleStart(response.data)));
        setShow(true);
    }

    async function postComment(event) {
        addComment({ commentValue: commentValue, postId: event.target.id })
    };

    function handleTextChange(event) {
        event.preventDefault();
        setCommentValue(event.target.value);
    };

    useEffect(() => {
        getUserPosts(id)
        .then((response) => dispatch(postFetchAllStart(response.data)));
    }, [postId, show, commentValue]);

    return (
        <Row xs={3}>
        {posts?.length > 0 ? posts?.map(({ postId, mediaLink, postValue, dateCreated, imageSource }) => (
            <Col>
            <Card key={postId} style={{ color: 'white', marginBottom: '1rem', objectFit: 'cover', height: '30rem' }} className="bg-dark">
                <Card.Img onClick={() => navigate(`/posts/${postId}`)} style={{ cursor: 'pointer', height: '20rem', width: 'auto', objectFit: 'cover' }} src={imageSource}/>
                <Card.Body>
                    <Card.Title>{postValue}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    {utcConverter(dateCreated)}
                </Card.Footer>
                <Card.Footer>
                    <Card.Text style={{ cursor: 'pointer', fontSize: '90%' }} id={postId} onClick={handleShow}>Comment</Card.Text>
                </Card.Footer>
            </Card>
            </Col>
        )) : 
            <Col xs={12}>
                <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
                </Card>
            </Col>
        }
            <Modal show={show} onHide={handleClose}>
                <Card className="bg-light" key={id}>
                    <div className='card-container'>
                    <Card.Link className='card-info' href={`posts/${postId}`}>
                        {imageSource && <Card.Img  style={{ objectFit:'cover'}} variant="top" src={imageSource} />}
                    </Card.Link>
                    </div>
                    <Card.Body >
                        <Card.Subtitle style={{ color: 'white' }}>{postValue}</Card.Subtitle>
                        <Card.Text>{`Posted ${utcConverter(dateCreated)}`}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <CommentInfo postId={postId} />
                        <Form id={postId} onSubmit={postComment}>
                        <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} xs={2}>
                            <Col xs={9} >
                                <Form.Control style={{ height: '.5rem' }} as="textarea" onChange={handleTextChange} placeholder=" Write your comment here" />
                            </Col>
                            <Col xs={3}>
                                <Button id={postId} style={{ width: '100%', height: '100%'}} variant="light" type="submit">
                                    Post
                                </Button>
                            </Col>                
                        </Row>
                        </Form>
                    </Card.Footer>
                </Card>
            </Modal>
        </Row>
    );
}

export default UserPostsTab;