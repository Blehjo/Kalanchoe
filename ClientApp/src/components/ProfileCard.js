import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { getSingleUser } from "../utils/api/user";
import { useDispatch, useSelector } from "react-redux";
import { selectUserprofileItems } from "../store/userprofiles/userprofile.selector";
import { addFollower, deleteFollower } from "../utils/api/follower";
import { userprofileFetchAllStart } from "../store/userprofiles/userprofile.action";

const ProfileCard = () => {
    const dispatch = useDispatch();
    const { userId, about, firstName, profileImage, username } = useSelector(selectUserprofileItems);
    const { id } = useParams();

    useEffect(() => {
        getSingleUser(id)
        .then((response) => dispatch(userprofileFetchAllStart(response.data)));
    }, [id])


    return (
        <Card style={{ color: 'white' }} className="bg-dark" key={userId}>
            <Card.Img variant="top" src={profileImage ? profileImage : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
            <Card.Body>
                <Row xs={2}>
                <Col xs={9}>
                <Card.Header>{username}</Card.Header>
                <Card.Title>{firstName}</Card.Title>
                <Card.Subtitle>{about}</Card.Subtitle>
                </Col>
                </Row>
                <Row style={{ marginBottom: '1rem' }} xs={2}>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;