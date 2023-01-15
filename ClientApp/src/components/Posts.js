import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFetchAllStart } from "../store/post/post.action";
import { selectPostReducer } from "../store/post/post.selector";
import { selectCurrentUser } from "../store/user/user.selector";
import { PostForm } from './PostForm';

const Posts = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const [isShowing, setIsShowing] = useState(false);
    const [posts, setPosts] = useState([]);

    const showPostForm = () =>
        setIsShowing(!isShowing);

    const getPosts = () =>
        dispatch(postFetchAllStart(currentUser));

    useEffect(() => {
        const retrievedPosts = getPosts();
        setPosts(retrievedPosts);
    }, [])

    return(
        <Fragment>
            <h1>Posts</h1>
            <button onClick={showPostForm}>Create a post</button>
            {
                isShowing && <PostForm/> 
            }
        </Fragment >
    );
}

export default Posts;
