import { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { getUsers } from '../utils/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserprofileItems } from '../store/userprofiles/userprofile.selector';
import { userprofileFetchAllStart } from '../store/userprofiles/userprofile.action';
import { addFollower, deleteFollower } from '../utils/api/follower';
import { selectCurrentUser } from '../store/user/user.selector';

export default function Profiles() {
    const dispatch = useDispatch();
    const userProfiles = useSelector(selectUserprofileItems);
    const user = useSelector(selectCurrentUser);
    const userId = Cookies.get("user");

    const followMate = async (event) => {
        event.preventDefault();
        addFollower(event.target.id);
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        deleteFollower(event.target.id);
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
                <Card.Img variant="top" src={"https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Row xs={2}>
                    <Col xs={9}>
                    <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`profile/${userId}`}>
                    <Card.Title>{username}</Card.Title>
                    </Card.Link>
                    </Col>
                    {/* <Col xs={3}>{(friendships.some(({ profile_request }) => profile_request === userId)) ? <Card.Text id={id} onClick={unfollowMate} >Unfollow</Card.Text> : <Card.Text id={id} onClick={followMate}>Follow</Card.Text> }</Col> */}
                    </Row>
                    {/* <Row style={{ marginBottom: '1rem' }} xs={2}>
                        <Col>
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
                        </Col>
                        <Col>
                        {userposts.length > 0 && <><Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/posts/${id}`}><Card.Title>Posts</Card.Title></Card.Link>
                        <Card.Text>{userposts.length}</Card.Text></>}
                        </Col>
                    </Row> */}
                    <Card.Text>{firstName}</Card.Text>
                    <Card.Subtitle>{about}</Card.Subtitle>
                    {/* {groups?.length > 0 && 
                    <>
                    <Card.Title style={{ marginTop: '1rem' }}>Shells</Card.Title>
                    {groups?.map(({ id, group_name, media_location_url }) => (
                        <Row xs={2} >
                            <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                                <Row xs={2} >
                                    <Col xs={1} >
                                        <Card.Img style={{ width: '1.2rem' }} src={media_location_url}/>
                                    </Col>
                                    <Col style={{ marginLeft: '2rem', position: 'relative' }} xs={11} >
                                        <Card.Text style={{ position: 'absolute', bottom: '0' }}>{group_name}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Link>
                        </Row>
                    ))} 
                    </>
                    } */}
                </Card.Body>
            </Card>
        </Col>
        ))}
    </Row>
  );
}