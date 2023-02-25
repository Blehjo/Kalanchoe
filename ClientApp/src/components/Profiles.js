import { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { getUsers } from '../utils/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserprofileItems } from '../store/userprofiles/userprofile.selector';
import { userprofileFetchAllStart } from '../store/userprofiles/userprofile.action';
import { addFollower, deleteFollower } from '../utils/api/follower';
import ModalSubmit from './ModalSubmit';
import { addMessage } from '../utils/api/message';

export default function Profiles() {
    const dispatch = useDispatch();
    const userProfiles = useSelector(selectUserprofileItems);
    const [show, setShow] = useState(false);

    const followMate = async (event) => {
        event.preventDefault();
        addFollower(event.target.id);
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        deleteFollower(event.target.id);
    }

    const sendMessage = () => {
        addMessage()
        .then((response) => response.data.messageId);
    }

    useEffect(() => {
        getUsers()
        .then((response) => dispatch(userprofileFetchAllStart(response.data)));
    }, [])

    return (
    <Row xs={1} md={2} lg={3} className="justify-content-center">
        {userProfiles?.map(({ userId, profileImage, firstName, about, username }) => (
        <Col key={userId} className='mb-5'>
            <Card style={{ color: 'white' }} className="bg-dark" key={userId}>
                <Card.Img variant="top" src={profileImage ? profileImage : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Row xs={2}>
                        <Col xs={9}>
                            <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`profile/${userId}`}>
                            <Card.Title>{username}</Card.Title>
                            </Card.Link>
                        </Col>
                    </Row>
                    <Card.Text>{firstName}</Card.Text>
                    <Card.Subtitle>{about}</Card.Subtitle>
                    <Card.Subtitle onClick={() => setShow(!show)}>Send Mesage</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
        ))}
        {
            show && 
            <ModalSubmit
                title={`Send  a message`}
                functionHandler={addMessage}
                id={sendMessage}
                type={"Channel"}
                placeholder={"Channel name"}
            />
        }
    </Row>
  );
}