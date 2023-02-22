import { Fragment, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postFetchAllStart } from "../store/post/post.action";
import { selectPostReducer } from "../store/post/post.selector";
import { selectCurrentUser } from "../store/user/user.selector";

import FetchedPosts from "./FetchedPosts";
import { PostForm } from './PostForm';

const Posts = () => {
    const [isShowing, setIsShowing] = useState(false);

    const showPostForm = () =>
        setIsShowing(!isShowing);

    return(
        <Fragment>
            <Row xs={2}>
                <Col xs={10}>
                    <h1>Posts</h1>
                </Col>
                <Col xs={2}>
                    <Button variant="light" onClick={showPostForm}>{!isShowing ? 'Create a post' : 'Nevermind'}</Button>
                </Col>
            </Row>
            {
                isShowing && <PostForm/> 
            }
            <FetchedPosts/>
        </Fragment >
    );
}

export default Posts;
