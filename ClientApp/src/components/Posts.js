import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postFetchAllStart } from "../store/post/post.action";
import { selectPostReducer } from "../store/post/post.selector";
import { selectCurrentUser } from "../store/user/user.selector";

import FetchedPosts from "./FetchedPosts";
import { PostForm } from './PostForm';

const Posts = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const [posts, setPosts] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    // const posts = useSelector(selectPostReducer);

    const showPostForm = () =>
        setIsShowing(!isShowing);

    return(
        <Fragment>
            <h1>Posts</h1>
            <Button variant="light" onClick={showPostForm}>{!isShowing ? 'Create a post' : 'Nevermind'}</Button>
            {
                isShowing && <PostForm/> 
            }
            <FetchedPosts/>
        </Fragment >
    );
}

export default Posts;
