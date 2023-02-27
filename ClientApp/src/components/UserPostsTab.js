import { Fragment, useState, useEffect } from "react";
import { Card, Modal, Row, Col, Form, Button } from "react-bootstrap";

import { utcConverter } from "../utils/date/Date";
import { useParams } from "react-router";
import { addComment } from "../utils/api/comment";
import { getUserPosts, getSinglePost } from "../utils/api/post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectSinglePost } from "../store/post/post.selector";
import { postFetchAllStart, postFetchSingleStart } from "../store/post/post.action";
import CommentInfo from "./CommentInfo";

const UserPostsTab = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const [commentValue, setCommentValue] = useState('');
    const { postId, mediaLink, postValue, dateCreated } = useSelector(selectSinglePost);
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
        {posts?.length > 0 ? posts?.map(({ postId, mediaLink, postValue, dateCreated }) => (
            <Col>
            <Card key={postId} style={{ color: 'white', marginBottom: '1rem', objectFit: 'cover', height: '30rem' }} className="bg-dark">
                <Card.Img style={{ height: '20rem', width: 'auto', objectFit: 'cover' }} src={mediaLink}/>
                <Card.Body>
                    <Card.Title>{postValue}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    {utcConverter(dateCreated)}
                </Card.Footer>
                <Card.Footer>
                    <Card.Text style={{ cursor: 'pointer' }} id={postId} onClick={handleShow}>Comment</Card.Text>
                </Card.Footer>
            </Card>
            </Col>
        )) : 
            <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
        }
            <Modal show={show} onHide={handleClose}>
                <Card className="bg-light" key={id}>
                    <div className='card-container'>
                    <Card.Link className='card-info' href={`posts/${id}`}>
                        {mediaLink && <Card.Img  style={{ objectFit:'cover'}} variant="top" src={mediaLink} />}
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
                                <Form.Control as="textarea" onChange={handleTextChange} placeholder=" Write your comment here" />
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