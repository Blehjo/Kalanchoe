import { Fragment, useState, useEffect } from 'react';
import { Col, Tooltip, OverlayTrigger, Modal, Button, Row, Card } from 'react-bootstrap';
import { XSquare, Robot, Globe, Paperclip, Clipboard, ChatDots, Messenger, FileCode, AspectRatio, Newspaper, JournalCode } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

import { communityFetchAllStart } from '../store/community/community.action';
import { selectCommunities } from '../store/community/community.selector';
import { setIsToolOpen } from '../store/tool/tool.action';
import { selectIsToolOpen } from '../store/tool/tool.selector';
import { getUserCommunities } from '../utils/api/community';
import { utcConverter } from '../utils/date/Date';
import { getAllMessages } from '../utils/api/message';
import { messageFetchAllStart } from '../store/message/message.action';
import { selectMessageItems } from '../store/message/message.selector';
import { getUserPosts } from '../utils/api/post';
import { postFetchAllStart } from '../store/post/post.action';
import { selectPosts } from '../store/post/post.selector';

const Toolbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [communities, setCommunities] = useState(false);
    const [messages, setMessages] = useState(false);
    const [posts, setPosts] = useState(false);
    const isToolOpen = useSelector(selectIsToolOpen);
    const userMessages = useSelector(selectMessageItems);
    const userPosts = useSelector(selectPosts);
    const userCommunities = useSelector(selectCommunities);
    const id = Cookies.get("user");
    
    useEffect(() => {
        getUserPosts(id)
        .then((response) => dispatch(postFetchAllStart(response.data)));
        getAllMessages()
        .then((response) => dispatch(messageFetchAllStart(response.data)));
        getUserCommunities(id)
        .then((response) => dispatch(communityFetchAllStart(response.data)));
    }, []);

    const toggleIsToolOpen = () => dispatch(setIsToolOpen(!isToolOpen));

    // Function that creates a new panel Modal
    const handlePanelClick = () => {
        console.log('handlePanelClick', 0);

    }
    
    // Function that creates a new note Modal
    const handleNoteClick = () => {
        console.log('handleNoteClick', 3);
        
    }

    // Function that calls Artoo Modal
    const handleArtooClick = () => {
        console.log('handleArtooClick', 1);
        
    }

    // Function that calls Saved Modal
    const handleSavedClick = () => {
        console.log('handleSavedClick', 4);
        
    }

    // Function that calls search bar for art
    const handleSearchBarClick = () => {
        console.log('handleSearchBarClick', 2);
        
    }

    // Function that calls search bar for poetry
    const handleEditorClick = () => {
        console.log('handleEditorlick');
        
    }

    // Function that shows tasks
    const handleTasksClick = () => {
        console.log('handleTasksClick', 5);
        
    }

    // Function that resets panel
    const showPosts = () => setPosts(!posts);

    // Function that shows messages
    const showMessages = () => setMessages(!messages);

    // Function that shows communities
    const showCommunities = () => setCommunities(!communities);

    return (
        <Fragment> 
            <Col style={{ cursor: 'pointer' }} onClick={handlePanelClick}>
                <OverlayTrigger
                    key="paperclip"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Panels
                        </Tooltip>
                    }
                >
                    <Paperclip className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleNoteClick}>
                <OverlayTrigger
                    key="filecode"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        IDE
                        </Tooltip>
                    }
                >
                    <FileCode className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleArtooClick}>
                <OverlayTrigger
                    key="robot"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Artoo
                        </Tooltip>
                    }
                >
                    <Robot className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleSavedClick}>
                <OverlayTrigger
                    key="messages"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Messages
                        </Tooltip>
                    }
                >
                    <ChatDots className='mx-2' action='true' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleSearchBarClick}>
            <OverlayTrigger
                    key="journal"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Notes
                        </Tooltip>
                    }
                >
                    <JournalCode className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleEditorClick}>
            <OverlayTrigger
                    key="news"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        News
                        </Tooltip>
                    }
                >
                    <Newspaper className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={showPosts}>
            <OverlayTrigger
                    key="robot"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Posts
                        </Tooltip>
                    }
                >
                    <AspectRatio style={{ cursor: 'pointer' }} className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={showMessages}>
            <OverlayTrigger
                    key="robot"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Messenger
                        </Tooltip>
                    }
                >
                    <Messenger className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            {/* If user is in communities, show this icon */}
            <Col style={{ cursor: 'pointer' }} onClick={showCommunities}>
            <OverlayTrigger
                    key="robot"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Communities
                        </Tooltip>
                    }
                >
                    <Globe className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={toggleIsToolOpen}>
            <OverlayTrigger
                key="robot"
                placement="bottom"
                overlay={
                    <Tooltip id="tooltip-bottom">
                    Close
                    </Tooltip>
                }
            >
                <XSquare className='mx-2' color="black" size={40} />
            </OverlayTrigger>
            {
                <Modal show={posts}>
                    <Modal.Header closeButton>
                        <Modal.Title>Posts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {userPosts?.length > 0 ? userPosts?.map(({ postId, mediaLink, postValue, dateCreated }) => (
                        <Col>
                        <Card onClick={() => navigate(`/posts/${postId}`)} key={postId} style={{ color: 'white', marginBottom: '1rem', objectFit: 'cover', cursor: 'pointer', height: '30rem' }} className="bg-dark">
                            <Card.Img style={{ height: '20rem', width: 'auto', objectFit: 'cover' }} src={mediaLink}/>
                            <Card.Body>
                                <Card.Title>{postValue}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {utcConverter(dateCreated)}
                            </Card.Footer>
                        </Card>
                        </Col>
                    )) : 
                        <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                            <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
                        </Card>
                    }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" as="input" type="button" value="Close" onClick={showMessages}/>
                    </Modal.Footer>
                </Modal>
            }
            {
                <Modal show={messages}>
                    <Modal.Header closeButton>
                        <Modal.Title>Messages</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div style={{ height: 'auto', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
                    {userMessages?.length > 0 ? userMessages?.map(({ messageId, messageValue }) => (
                        <div style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={messageId}>
                        <Row style={{ justifyContent: 'center' }} >
                            <Col xs={9}>
                            <div id={messageId} onClick={(event) => navigate(`/messages/${event.target.id}`)}>
                            {messageValue}
                            </div>
                            </Col>
                        </Row>
                        </div>
                    )) : 
                        <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                            <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
                        </Card>
                    }
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" as="input" type="button" value="Close" onClick={showMessages}/>
                    </Modal.Footer>
                </Modal>
            }
            {
                <Modal show={communities}>
                    <Modal.Header closeButton>
                        <Modal.Title>Communities</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {userCommunities?.length > 0 ? Array.from(userCommunities)?.map(({ communityId, groupName, description, dateCreated, mediaLink }) => (
                        <Card.Link key={communityId} style={{ textDecoration: 'none', color: 'black', margin: '1rem' }} href={`/community/${id}`}>
                            <Row>
                                <Col key='img' xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={mediaLink} />
                                </Col>
                                <Col xl={8} key={communityId}>
                                    <Card.Header>{groupName}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Card.Text>{`Established ${utcConverter(dateCreated)}`}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card.Link>
                    )) : (
                        <Card key='excuse' style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                            <Card.Title>"Stay tuned. Currently no communities..."</Card.Title>
                        </Card>
                    )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" as="input" type="button" value="Close" onClick={showCommunities}/>
                    </Modal.Footer>
                </Modal>
            }
            </Col>
        </Fragment>
    )
}

export default Toolbar;