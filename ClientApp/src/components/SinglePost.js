import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { getSinglePost } from "../utils/api/post";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { deletePost, editPost } from "../utils/api/post";

const SinglePost = () => {
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const { id } = useParams();

    const clearPost = async (event) => {
        const id = event.target.id;
        deletePost(id);
    }

    const updatePost = async (event) => {
        const id = event.target.id;
        editPost();
    }

    const backToPosts = () => {
        navigate(`/posts`);
    }

    useEffect(() => {
        getSinglePost(id)
        .then((response) => setPost(response.data));
    }, [])

    return(
        <div style={{ margin: 'auto' }}>
            <Button variant="light" as="input" type="button" value="Back to Posts" onClick={backToPosts}/>
            {post.mediaLink?.length > 0 ? <Card.Img height='400rem' style={{ objectFit:'scale-down'}} src={post.mediaLink}/> : ''}
            <Card.Title style={{ textAlign: 'center' }}>{post.postValue}</Card.Title>
            {currentUser && <Button variant="light" as="input" type="button" value="Delete" onClick={clearPost} id={post.postId}/>}
            {currentUser && <Button variant="light" as="input" type="button" value="Edit" onClick={updatePost} id={post.postId}/>}
        </div>
    );
}

export default SinglePost;