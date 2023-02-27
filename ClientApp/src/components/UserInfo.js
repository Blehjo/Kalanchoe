import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getSingleUser } from "../utils/api/user";

const UserInfo = ({ userId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ 
        username: '', 
        profileImage: ''
    });
    const { username, profileImage } = user;

    useEffect(() => {
        getSingleUser(userId)
        .then((response) => setUser(response.data));
    }, []);

    return (
        <Row xs={2} style={{ cursor: 'pointer', justifyContent: 'left' }}>
            <Col style={{ height: '.1rem', width: 'auto' }} xs={1}>
                <img style={{ height: '1rem', width: '1rem', objectFit: 'cover', borderRadius: '.2rem' }} src={profileImage} />
            </Col>
            <Col>
                <div onClick={() => navigate(`/profile/${userId}`)}>{username}</div>
            </Col>
        </Row>
    );
}

export default UserInfo;