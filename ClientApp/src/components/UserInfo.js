import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getSingleUser } from "../utils/api/user";

const UserInfo = ({ userId }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ 
        userId: '', 
        username: '', 
        profileImage: ''
    });
    const { username, profileImage } = user;

    useEffect(() => {
        getSingleUser(userId)
        .then((response) => setUser(response.data));
    }, []);

    return (
        <Row xs={2} style={{ justifyContent: 'center' }}>
            <Col style={{ height: '.1rem', width: 'auto', textAlign: 'center' }} xs={1}>
                <img style={{ height: '1.5rem', borderRadius: '.2rem' }} src={profileImage} />
            </Col>
            <Col>
                <div onClick={() => navigate(`/profile/${userId}`)}>{username}</div>
            </Col>
        </Row>
    );
}

export default UserInfo;