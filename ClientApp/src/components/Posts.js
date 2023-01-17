import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postFetchAllStart } from "../store/post/post.action";
import { selectPostReducer } from "../store/post/post.selector";
import { selectCurrentUser } from "../store/user/user.selector";
import { PostForm } from './PostForm';

const Posts = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const [isShowing, setIsShowing] = useState(false);
    const fetched = useSelector(selectPostReducer);
    const [posts, setPosts] = useState(fetched);

    const showPostForm = () =>
        setIsShowing(!isShowing);

    // const getPosts = () =>
        
        // dispatch(postFetchAllStart(currentUser));

    useEffect(() => {
        // const retrievedPosts = getPosts();
        // setPosts(retrievedPosts);
        setPosts(fetched.posts);
    }, []);

    console.log('posts: ', posts);

    return(
        <Fragment>
            <h1>Posts</h1>
            <Button onClick={showPostForm}>{!isShowing ? 'Create a post' : 'Nevermind'}</Button>
            {
                isShowing && <PostForm/> 
            }

        </Fragment >
    );
}

export default Posts;
