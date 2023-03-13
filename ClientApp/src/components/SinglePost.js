import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { getSinglePost } from "../utils/api/post";
import { useDispatch, useSelector } from "react-redux";
import { selectSinglePost } from "../store/post/post.selector";
import { postFetchSingleStart } from "../store/post/post.action";
import { utcConverter } from "../utils/date/Date";
import CommentInfo from "./CommentInfo";
import { addComment } from "../utils/api/comment";

const defaultFormFields = {
    commentValue: '',
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

const SinglePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { postId, mediaLink, imageSource, postValue, dateCreated } = useSelector(selectSinglePost);
    const { id } = useParams();

    const backToPosts = () => {
        navigate(`/posts`);
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    useEffect(() => {
        getSinglePost(id)
        .then((response) => dispatch(postFetchSingleStart(response.data)));
    }, [postId]);

    return(
        <div key={postId} style={{ margin: 'auto' }}>
            <Button variant="light" as="input" type="button" value="Back to Posts" onClick={backToPosts}/>
            <Row xs={1} style={{ justifyContent: 'center' }}>
                <Col xs={12}>
                    {mediaLink?.length > 0 ? <Card.Img style={{ height: '25rem', borderRadius: '1rem', objectFit: 'contain', marginBottom: '1rem' }} src={imageSource}/> : ''}
                </Col>
                <Col xs={12} md={9} lg={6}>
                    <Row xs={2}>
                        <Col xs={9}>
                            <Card.Title style={{ textAlign: 'left', marginBottom: '1rem' }}>{postValue}</Card.Title>
                        </Col>
                        <Col xs={2}>
                            <Card.Text style={{ textAlign: 'right' }}>{utcConverter(dateCreated)}</Card.Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <Col xs={12} md={9} lg={6}>
                    <CommentInfo postId={postId} />
                </Col>
            </Row>
            <Form style={{ margin: 'auto' }} id={postId} onSubmit={postComment}>
                <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} xs={2}>
                    <Col xs={9} md={8} lg={4}>
                        <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Control style={{ height: '.5rem' }} name="commentValue" as="textarea" onChange={handleChange} placeholder=" Write your comment here" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ justifyContent: 'center' }}>
                            <Col xs={12}>
                                <Form.Group className="mb-3" controlId="formMedia">
                                    <Form.Control onChange={showPreview} name="mediaLink" as="input" accept="image/*" type="file" placeholder="Media" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} md={2}>
                        <Button id={postId} style={{ textAlign: 'center', width: '100%', height: '100%'}} variant="light" type="submit">
                            Post
                        </Button>
                    </Col>                
                </Row>
            </Form>
        </div>
    );
}

export default SinglePost;