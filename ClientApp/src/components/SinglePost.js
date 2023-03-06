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

const SinglePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { postId, mediaLink, postValue, dateCreated } = useSelector(selectSinglePost);
    const { id } = useParams();
    const [commentValue, setCommentValue] = useState('');

    const backToPosts = () => {
        navigate(`/posts`);
    }

    async function postComment(event) {
        addComment({ commentValue: commentValue, postId: event.target.id });
    };

    function handleTextChange(event) {
        event.preventDefault();
        setCommentValue(event.target.value);
    };

    useEffect(() => {
        getSinglePost(id)
        .then((response) => dispatch(postFetchSingleStart(response.data)));
    }, [postId, commentValue]);

    return(
        <div key={postId} style={{ margin: 'auto' }}>
            <Button variant="light" as="input" type="button" value="Back to Posts" onClick={backToPosts}/>
            <Row xs={1} style={{ justifyContent: 'center' }}>
                <Col xs={12}>
                    {mediaLink?.length > 0 ? <Card.Img style={{ height: '25rem', borderRadius: '1rem', objectFit: 'contain' }} src={mediaLink}/> : ''}
                </Col>
                <Col xs={12} md={6}>
                    <Row xs={2}>
                        <Col xs={10}>
                            <Card.Title style={{ textAlign: 'left', marginBottom: '1rem' }}>{postValue}</Card.Title>
                        </Col>
                        <Col xs={2}>
                            <Card.Text style={{ textAlign: 'right' }}>{utcConverter(dateCreated)}</Card.Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <Col xs={12} md={6}>
                    <CommentInfo postId={postId} />
                </Col>
            </Row>
            <Form style={{ margin: 'auto' }} id={postId} onSubmit={postComment}>
                <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} xs={2}>
                    <Col xs={9} md={8} lg={5}>
                        <Form.Control as="textarea" onChange={handleTextChange} placeholder=" Write your comment here" />
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