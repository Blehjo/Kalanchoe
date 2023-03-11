import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, editPost, getPosts } from "../utils/api/post";
import { Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../store/post/post.selector";
import { postFetchAllStart } from "../store/post/post.action";
import UserInfo from "./UserInfo";

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const navigate = useNavigate();

    const clearPost = async (event) => {
        const id = event.target.id;
        deletePost(id);
    }

    const updatePost = async (event) => {
        const id = event.target.id;
        editPost();
    }

    const goToPost = async (event) => {
        const id = event.target.id;
        navigate(`/posts/${id}`);
    }

    useEffect(() => {
        getPosts()
        .then((response) => dispatch(postFetchAllStart(response.data)));
    }, []);

    console.log(posts)

    return (
        <Row xs={1} style={{ marginTop: '1rem' }}>
            {
                posts?.length > 0 && posts?.map(({ postValue, postId, mediaLink, userId, imageSource }) => (
                    <Row style={{ margin: '1rem' }} xs={2}>
                        <Col xs={4} onClick={goToPost} key={postId}>
                            {mediaLink?.length > 0 ? <Card.Img height='200' style={{ objectFit:'cover'}} src={imageSource}/> : ''}
                        </Col>
                        <Col>
                            <Card.Title style={{ margin: '1rem' }}>{postValue}</Card.Title>
                            <div style={{ margin: '1rem' }}>
                            <UserInfo userId={userId} />
                            </div>
                            <Button variant="light" onClick={goToPost} as="input" type="button" value="Go to Post" id={postId}/>
                        </Col>
                    </Row>
                ))
            }
        </Row>
    )
}

export default FetchedPosts;