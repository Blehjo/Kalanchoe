import { Fragment, useState, useEffect } from "react";
import { Card, Modal, Row, Col, Form, Button } from "react-bootstrap";

import { utcConverter } from "../utils/date/Date";
import { useParams } from "react-router";
import { addComment } from "../utils/api/comment";
import { getUserPosts } from "../utils/api/post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../store/post/post.selector";
import { postFetchAllStart } from "../store/post/post.action";

const UserPostsTab = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const [commentValue, setCommentValue] = useState('');
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    }, []);

    return (
        <Fragment>
            {posts?.length > 0 ? posts?.map(({ postId, mediaLink, postValue, dateCreated }) => (
                <>
                <Card key={id} style={{ color: 'white', marginBottom: '1rem' }} className="bg-dark">
                    <Card.Img src={mediaLink}/>
                    <Card.Body>
                        <Card.Title>{postValue}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        {utcConverter(dateCreated)}
                    </Card.Footer>
                    <Card.Footer>
                        <Card.Text id={id} onClick={handleShow}>Comment</Card.Text>
                    </Card.Footer>
                </Card>
                <Modal show={show} onHide={handleClose}>
                <Card className="bg-dark" key={id}>
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
                </>
            )) : 
            <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default UserPostsTab;