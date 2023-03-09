import { useState, useEffect } from "react";
import { Card, Modal, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import { utcConverter } from "../utils/date/Date";
import { useParams } from "react-router";
import { addComment } from "../utils/api/comment";
import { getUserPosts, getSinglePost } from "../utils/api/post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectSinglePost } from "../store/post/post.selector";
import { postFetchAllStart, postFetchSingleStart } from "../store/post/post.action";
import CommentInfo from "./CommentInfo";
import { PostForm } from "./PostForm";

const PostsTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector(selectPosts);
    const { postId, mediaLink, postValue, dateCreated } = useSelector(selectSinglePost);
    const [commentValue, setCommentValue] = useState('');
    const [postForm, setPostForm] = useState(false);
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handlePostForm = () => setPostForm(!postForm);

    const handleShow = (event) => {
        getSinglePost(event.target.id)
        .then((response) => dispatch(postFetchSingleStart(response.data)));
        setShow(true);
    }

    async function postComment(event) {
        addComment({ commentValue: commentValue, postId: event.target.id });
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
        <>
        <Row style={{ marginBottom: '2rem' }} xs={1} >
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} onClick={handlePostForm}>Create a post</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        <Row xs={3}>
        {posts?.length > 0 ? posts?.map(({ postId, mediaLink, postValue, dateCreated }) => (
            <Col>
            <Card key={postId} style={{ color: 'white', marginBottom: '1rem', objectFit: 'cover', height: '30rem' }} className="bg-dark">
                <Card.Img onClick={() => navigate(`/posts/${id}`)} style={{ cursor: 'pointer', height: '20rem', width: 'auto', objectFit: 'cover' }} src={mediaLink}/>
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
            <Col xs={12}>
                <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
                </Card>
            </Col>
        }
            <Modal show={show} onHide={handleClose}>
                <Card className="bg-light" key={id}>
                    <div className='card-container'>
                    <Card.Link className='card-info' href={`posts/${id}`}>
                        {mediaLink && <Card.Img style={{ objectFit:'cover'}} variant="top" src={mediaLink} />}
                    </Card.Link>
                    </div>
                    <Card.Body >
                        <Card.Subtitle >{postValue}</Card.Subtitle>
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
            <Modal show={postForm} onHide={handlePostForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a post</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ marginTop: '-1rem' }}>
                    <PostForm/>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center' }}>
                    Share your masterpiece!
                </Modal.Footer>
            </Modal>
        </Row>
        </>
    );
}

export default PostsTab;