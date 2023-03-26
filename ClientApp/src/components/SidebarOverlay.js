import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Col, Nav, Row } from "react-bootstrap";
import { Collection, House, Database, Eye, Clipboard, Bookmark, ChatDots, Person, PersonWorkspace, Newspaper, Robot } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { communityFetchAllStart } from "../store/community/community.action";
import { selectCommunities } from "../store/community/community.selector";
import { getUserCommunities } from "../utils/api/community";
import { getUser } from "../utils/userDocument";

const SidebarOverlay = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);
    const [userId, setUserId] = useState(null);

    const goToCommunity = (event) => {
        const channel = event.target.id;
        if (channel != null) {
            navigate(`/community/${channel}`);
        }
    }

    useEffect(() => {
        getUser()
        .then((response) => setUserId(response.data.userId));

        getUser()
        .then((response) => getUserCommunities(response.data.userId).then((response) => dispatch(communityFetchAllStart(response.data))));
    }, []);

    return (
        <div style={{ color: "black", width: 200, height: '100vh', overflowY: 'auto', marginTop: '3rem', overflowX: 'hidden' }} className='sidebaroverlay fixed-top bg-light'>
            <Row 
            className="mw-100 pt-3"  
            xs={1} 
            >
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Person className='' color="black" size={20}/>
                    <Nav.Link href={userId != null ? "/profile" : "/authentication"} className="ms-4">
                        Workspace
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <House className='' color="black" size={20}/>
                    <Nav.Link href={userId != null ? `/page/${userId}` : "/authentication"} className="ms-4">
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Robot className='' color="black" size={20} />
                    <Nav.Link href="/chats" className="ms-4">
                        Artoo
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <ChatDots className='' color="black" size={20} />
                    <Nav.Link href={userId != null ? "/messages" : "/authentication"} className="ms-4">
                        Messages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <PersonWorkspace className='' color="black" size={20}/>
                    <Nav.Link href="/dashboard" className="ms-4">
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Clipboard className='' color="black" size={20} />
                    <Nav.Link href={userId != null ? "/projects" : "/authentication"} className="ms-4">
                        Projects
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Eye className='' color="black" size={20}/>
                    <Nav.Link href="/explore" className="ms-4">
                        Explore
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Database className='' color="black" size={20}/>
                    <Nav.Link href="/communities" className="ms-4">
                        Communities
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Collection className='' color="black" size={20}/>
                    <Nav.Link href="/posts" className="ms-4">
                        Posts
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Bookmark className='' color="black" size={20}/>
                    <Nav.Link href={userId != null ? "/saved" : "/authentication"} className="ms-4">
                        Saves
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Newspaper className='' color="black" size={20}/>
                    <Nav.Link href="/news" className="ms-4">
                        News
                    </Nav.Link>
                </Nav.Item >
                {communities?.length > 0 && communities?.map(({ communityId, groupName, imageSource }) => (
                <div style={{ cursor: 'pointer', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={communityId}>
                    <Row xs={2}>
                        <Col xs={2}>
                            <img style={{ marginLeft: '1.5rem', objectFit: 'cover' }} height="20rem" width="20rem" id={communityId} onClick={goToCommunity} className="medialinkfeed" src={imageSource} />
                        </Col>
                        <Col xs={10}>
                            <div style={{ marginLeft: "1rem" }} id={communityId} onClick={goToCommunity}>
                                {groupName}
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
            </Row>
        </div>
    )
}

export default SidebarOverlay;