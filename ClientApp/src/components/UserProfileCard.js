import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { getSingleUser } from "../utils/api/user";
import { useDispatch, useSelector } from "react-redux";
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
                    <Card.Header>{username}</Card.Header>
                    <Card.Title>{firstName}</Card.Title>
                    <Card.Subtitle>{about}</Card.Subtitle>
                    </Card.Link>
                    </Col>
                    {/* <Col xs={3}>{(friendships.some(({ profile_request }) => profile_request === 'auth?.id')) ? <Card.Text id={id} onClick={unfollowMate} >Unfollow</Card.Text> : <Card.Text id={id} onClick={followMate}>Follow</Card.Text> }</Col> */}
                    </Row>
                    <Row style={{ marginBottom: '1rem' }} xs={2}>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default UserProfileCard;