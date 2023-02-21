import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { getSingleUser } from "../utils/api/user";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUserprofile, onuserprofileFetchSingleStart } from "../store/userprofiles/userprofile.saga";
import { selectUserprofileItems } from "../store/userprofiles/userprofile.selector";
import { addFollower, deleteFollower } from "../utils/api/follower";
import { userprofileFetchAllStart } from "../store/userprofiles/userprofile.action";

const UserProfileCard = () => {
    const dispatch = useDispatch();
    const { userId, about, firstName, profileImage, username } = useSelector(selectUserprofileItems);
    const { id } = useParams();

    const followMate = async (event) => {
        event.preventDefault();
        addFollower(id);
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        deleteFollower(id);
    }

    useEffect(() => {
        getSingleUser(id)
        .then((response) => dispatch(userprofileFetchAllStart(response.data)));
    }, [id])

    return (
        <Fragment>
            <Card style={{ color: 'white' }} className="bg-dark" key={userId}>
                <Card.Img variant="top" src={profileImage ? profileImage : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Row xs={2}>
                    <Col xs={9}>
                    <Card.Link style={{ textDecoration: 'none', color: 'black' }} href={`profile/${id}`}>
                    <Card.Title>{username}</Card.Title>
                    </Card.Link>
                    </Col>
                    {/* <Col xs={3}>{(friendships.some(({ profile_request }) => profile_request === 'auth?.id')) ? <Card.Text id={id} onClick={unfollowMate} >Unfollow</Card.Text> : <Card.Text id={id} onClick={followMate}>Follow</Card.Text> }</Col> */}
                    </Row>
                    <Row style={{ marginBottom: '1rem' }} xs={2}>
                        {/* <Col>
                        {friendships?.length > 0 && 
                        <>
                        <Card.Title >Ghosts</Card.Title>
                            <Row >
                                <Col xs={10}>
                                    <Card.Text>{friendships.length}</Card.Text>
                                </Col>
                            </Row>
                        </>
                        }
                        </Col> */}
                        {/* <Col>
                        {userposts.length > 0 && <><Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/posts/${id}`}><Card.Title>Posts</Card.Title></Card.Link>
                        <Card.Text>{userposts.length}</Card.Text></>}
                        </Col> */}
                    </Row>
                    {/* <Card.Text>{firstName}</Card.Text>
                    <Card.Subtitle>{about}</Card.Subtitle>
                    {communities?.length > 0 && 
                    <>
                    <Card.Title style={{ marginTop: '1rem' }}>Communities</Card.Title>
                    {communities?.map(({ communityId, groupName, mediaLink }) => (
                        <Row xs={2} >
                            <Card.Link style={{ textDecoration: 'none' }} href={`/community/${communityId}`}>
                                <Row xs={2} >
                                    <Col xs={1} >
                                        <Card.Img style={{ width: '1.2rem' }} src={mediaLink}/>
                                    </Col>
                                    <Col style={{ marginLeft: '2rem', position: 'relative' }} xs={11} >
                                        <Card.Text style={{ position: 'absolute', bottom: '0' }}>{groupName}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Link>
                        </Row>
                    ))} 
                    </>
                    } */}
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default UserProfileCard;