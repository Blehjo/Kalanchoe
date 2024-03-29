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
import { PostForm } from "./PostForm";

const defaultFormFields = {
    commentValue: '',
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

const PostsTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const posts = useSelector(selectPosts);
    const { postId, mediaLink, imageSource, postValue, dateCreated } = useSelector(selectSinglePost);
    const [postForm, setPostForm] = useState(false);
    const [show, setShow] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleClose = () => setShow(false);

    const handlePostForm = () => setPostForm(!postForm);

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFormFields({
                    ...formFields,
                    imageFile,
                    imageSource: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setFormFields({
                ...formFields,
                imageFile: null,
                imageSource: null
            })
        }
    }

    const handleShow = (event) => {
        getSinglePost(event.target.id)
        .then((response) => dispatch(postFetchSingleStart(response.data)));
        setShow(true);
    }

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    async function postComment(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('postId', event.target.id)
        formData.append('commentValue', formFields.commentValue);
        formData.append('mediaLink', formFields.mediaLink);
        formData.append('imageFile', formFields.imageFile);
        addComment(formData)
        .then(() => window.location.reload());
        resetFormFields();
    };

    useEffect(() => {
        getUserPosts(id)
        .then((response) => dispatch(postFetchAllStart(response.data)));
    }, [postId, show]);

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
                    <Card.Link className='card-info' href={`posts/${postId}`}>
                        {imageSource && <Card.Img style={{ objectFit:'cover'}} variant="top" src={imageSource} />}
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
                                <Row style={{ marginBottom: '1rem' }}>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control style={{ height: '.5rem' }} name="commentValue" as="textarea" onChange={handleChange} placeholder=" Write your comment here" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formMedia">
                                            <Form.Control onChange={showPreview} name="mediaLink" as="input" accept="image/*" type="file" placeholder="Media" />
                                        </Form.Group>
                                    </Col>
                                </Row>
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