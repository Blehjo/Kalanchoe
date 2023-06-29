import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getSingleUser } from "../utils/api/user.api";

const UserInfo = ({ userId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ 
        username: '', 
        profileImage: ''
    });
    const { username, profileImage, imageSource } = user;

    useEffect(() => {
        getSingleUser(userId)
        .then((response) => setUser(response.data));
    }, []);

    return (
        <Row xs={1} style={{ cursor: 'pointer', justifyContent: 'left' }}>
            <Col style={{ height: '.1rem', width: 'auto' }} xs={1}>
                <img style={{ height: '1rem', width: '1rem', objectFit: 'cover', borderRadius: '.2rem' }} src={profileImage && imageSource} />
            </Col>
            <Col xs={11}>
                <div style={{ textAlign: 'left', marginLeft: '1.5rem' }} onClick={() => navigate(`/profile/${userId}`)}>{username}</div>
            </Col>
        </Row>
    );
}

export default UserInfo;