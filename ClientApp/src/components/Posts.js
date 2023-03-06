import { Fragment, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FileMinus, Plus } from "react-bootstrap-icons";

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
                <Col xs={1}>
                    <Button variant="light" onClick={showPostForm}>{!isShowing ? <Plus/> : <FileMinus/>}</Button>
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
