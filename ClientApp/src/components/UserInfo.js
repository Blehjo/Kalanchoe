import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getSingleUser } from "../utils/api/user";

const UserInfo = ({ userId }) => {
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
        <Row xs={2}>
            <Col style={{ height: '.1rem', width: 'auto', textAlign: 'center' }} xs={1}>
                <img src={profileImage} />
            </Col>
            <Col>
                <div>{username}</div>
            </Col>
        </Row>
    );
}

export default UserInfo;