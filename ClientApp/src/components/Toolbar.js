import { Fragment, useState, useEffect } from 'react';
import { Col, Tooltip, OverlayTrigger, Modal, Button, Row, Card, Form, Dropdown } from 'react-bootstrap';
import { XSquare, Robot, Globe, Paperclip, Clipboard, Messenger, AspectRatio, Newspaper } from 'react-bootstrap-icons';
import axios from 'axios';
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
import { toggle } from "../utils/artootoggle";
import { postFetchAllStart } from '../store/post/post.action';
import { selectPosts } from '../store/post/post.selector';
import { selectChatCommentItems } from '../store/chatcomment/chatcomment.selector';
import { addChat } from '../utils/api/chat';
import { addChatComment } from '../utils/api/chatcomment';
import ModalSubmit from './ModalSubmit';
import { addPanel, getUserPanels } from '../utils/api/panel';
import { addNote } from '../utils/api/note';
import { panelFetchUserStart } from '../store/panel/panel.action';
import { selectUserPanelItems } from '../store/panel/panel.selector';
import { getSingleUser } from '../utils/api/user';
import { getUser } from '../utils/userDocument';

const defaultFormFields = {
    request: ''
}

const Toolbar = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [communities, setCommunities] = useState(false);
    const [messages, setMessages] = useState(false);
    const [posts, setPosts] = useState(false);
    const [news, setNews] = useState(false);
    const [artoo, setArtoo] = useState(false);
    const [saved, setSaved] = useState(false);
    const [note, setNote] = useState(false);
    const [panel, setPanel] = useState(false);
    const [results, setResults] = useState([]);
    const [objects, setObjects] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { request } = formFields;  
    const [choice, setChoice] = useState("Artoo");
    const userPanels = useSelector(selectUserPanelItems);
    const [panelChoice, setPanelChoice] = useState("Choose Panel");
    const [value, setValue] = useState("");
    const [itemId, setItemId] = useState(null);
    const isToolOpen = useSelector(selectIsToolOpen);
    const userMessages = useSelector(selectMessageItems);
    const userPosts = useSelector(selectPosts);
    const userCommunities = useSelector(selectCommunities);
    const userChatComments = useSelector(selectChatCommentItems);
    const id = Cookies.get("user");
    const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
    const objectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const handleAddChat = async () => {
        return await addChat({ title: request })
        .then((response) => addChatComment({ chatValue: request, chatId: response.data.chatId }));
      }

    const artooResponse = async (chatId) => {
        await axios({
          method: 'post',
          url: toggle(choice),
          data: {
            request: request
          },
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        .then((response) => addChatComment({ chatValue: response.data, chatId: chatId }).then((response) => navigate(`/artoo/${response.data.chatId}`)));
    }

    const sendMessage = async (event) => {
        event.preventDefault();
        await handleAddChat()
        .then((response) => artooResponse(response.data.chatId));
        resetForm();
        window.location.reload();
    }

    const handleChoiceChange = (event) => {
        setPanelChoice(event.target.name);
        setItemId(event.target.id);
    }
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = () => {
        addNote({ value, id: itemId })
    }

    const handleSearchFieldChange = (event) => {
        setSearchField(event.target.value);
    }

    const search = () => {
        const doTask = async (objectId) => {
            await axios.get(objectUrl + objectId)
                .then((response) => setResults(response.data.primaryImage));
        }
        
        objects.splice(0, 10).map((object) => doTask(object));
    }

    const artSearch = async (event) => {
        event.preventDefault();
        await axios.get(baseUrl + searchField)
            .then((response) => setObjects(response.data.objectIDs));
        search();
    }
    
    useEffect(() => {
        getUserPanels()
        .then((response) => dispatch(panelFetchUserStart(response.data)));
        getUser()
        .then((response) => getUserPosts(response.data.userId))
        .then((response) => dispatch(postFetchAllStart(response.data)));
        getAllMessages()
        .then((response) => dispatch(messageFetchAllStart(response.data)));
        getUser()
        .then((response) => getUserCommunities(response.data.userId))
        .then((response) => dispatch(communityFetchAllStart(response.data)));
    }, []);

    const toggleIsToolOpen = () => dispatch(setIsToolOpen(!isToolOpen));

    // Function that creates a new panel Modal
    const handlePanelClick = () => setPanel(!panel);
    
    // Function that creates a new note Modal
    const handleNoteClick = (event) => {
        event.preventDefault();
        setNote(!note);
    }

    // Function that calls Artoo Modal
    const handleArtooClick = () => setArtoo(!artoo);

    // Function that calls Saved Modal
    const handleSavedClick = () => setSaved(!saved);

    // Function that calls search bar for art
    const handleSearchBarClick = () => setNews(!news);

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
                    <Clipboard className='mx-2' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleNoteClick}>
            <OverlayTrigger
                    key="journal"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Notes
                        </Tooltip>
                    }
                >
                    <Paperclip className='mx-2' color="black" size={40} />
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
            <Col style={{ cursor: 'pointer' }} onClick={handleSearchBarClick}>
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
            <Col style={{ cursor: 'pointer' }} >
            <OverlayTrigger
                key="closebutton"
                placement="bottom"
                overlay={
                    <Tooltip id="tooltip-close">
                    Close
                    </Tooltip>
                }
            >
                <XSquare onClick={toggleIsToolOpen} className='mx-2' color="black" size={40} />
            </OverlayTrigger>
            {
                <Modal show={note} onHide={handleNoteClick}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header onClick={handleNoteClick} closeButton>
                        <Row xs={2}>
                        <Col>
                        <Modal.Title>New Note</Modal.Title>
                        </Col>
                        <Col>
                        <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown">
                            {panelChoice}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {userPanels?.length && userPanels?.map(({ panelId, title }) => (
                                <Dropdown.Item id={panelId} key={panelId} onClick={handleChoiceChange} name={title} value={title}>{title}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        </Dropdown>
                        </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{ height: '.5rem' }} onChange={handleValueChange} value={value} as="textarea" placeholder="Write your note" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" as="input" type="button" value="Close" onClick={handleNoteClick}/>
                        <Button variant="light" as="input" type="submit" value={`Add note`} />
                    </Modal.Footer>
                </Form>
                </Modal>
            }
            {
                panel &&
                <ModalSubmit
                    title={"New Panel"}
                    functionHandler={addPanel}
                    type={"Panel"}
                    placeholder={"Write panel name here"}
                />
            }
            {
                <Modal show={artoo}>
                    <Modal.Header onClick={handleArtooClick} closeButton>Artoo</Modal.Header>
                    <Modal.Body>
                    <Col >
                        <Form style={{ background: '#d4d4d4', borderRadius: '.2rem' }} onSubmit={sendMessage}>
                        <Dropdown style={{ padding: '1rem' }}>
                        <Dropdown.Toggle variant="light" id="dropdown">
                            {choice}
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Artoo" value="artoo">Artoo</Dropdown.Item>
                            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Text" value="text">Text</Dropdown.Item>
                            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Code" value="code">Code</Dropdown.Item>
                            <Dropdown.Item onClick={(event) => setChoice(event.target.name)} name="Art" value="art">Art</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Row style={{ padding: '2rem' }}>
                            <Col>
                            <div style={{ height: 'auto', overflowY: 'auto', borderRadius: '.2rem' }}>
                            {userChatComments?.length > 0 && userChatComments?.map(({ chatCommentId, chatValue }) => (
                                <div style={{ background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} key={chatCommentId}>
                                    <div key={chatValue}>
                                    {chatValue}
                                    </div>
                                </div>
                            ))}
                            </div>
                            </Col>
                        </Row>
                        <Row style={{ padding: '2rem', margin: 'auto' }} xs={2}>
                            <Col xs={10}>
                            <Form.Group className="mb-3" controlId="request">
                                <Form.Control style={{ height: '.5rem' }} as="textarea" onChange={handleChange} value={request} name="request" placeholder="Send a message" />
                            </Form.Group>
                            </Col>
                            <Col xs={2}>
                            <Button variant="light" type="submit">
                                Submit
                            </Button>
                            </Col>
                        </Row>
                        </Form>
                    </Col>
                    </Modal.Body>
                </Modal>
            }
            {
                <Modal show={news}>
                    <Modal.Header onClick={handleSearchBarClick} closeButton>
                        <Modal.Title>Search</Modal.Title> 
                    </Modal.Header>
                    <Modal.Body>
                    <Row xs={1} style={{ justifyContent: 'center', margin: '1rem' }}>
                        <Col >
                            <img style={{ objectFit: 'cover', width: '25rem', height: '140px', borderRadius: '1rem' }} src="https://i.imgur.com/20LpIoh.jpg"/>
                        </Col>
                    </Row>
                    <Row xs={1} style={{ justifyContent: 'center', marginTop: '2rem' }}>
                        <Col >
                            <Form style={{ margin: '.2rem' }} onSubmit={artSearch}> 
                                <Form.Group>
                                    <Form.Control style={{ textAlign: 'center' }} onChange={handleSearchFieldChange} value={searchField} as="textarea" placeholder="Search for art" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Row>
                        <Col xs={8}>
                        {results?.map((image) => (
                            <Card.Img src={image} alt={image} />
                            ))}
                        </Col>
                    </Row>
                    </Modal.Footer>
                </Modal>
            }
            {
                <Modal show={posts}>
                    <Modal.Header onClick={showPosts} closeButton>
                        <Modal.Title>Posts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {userPosts?.length > 0 ? userPosts?.map(({ postId, mediaLink, postValue, imageSource, dateCreated }) => (
                        <Col>
                        <Card onClick={() => navigate(`/posts/${postId}`)} key={postId} style={{ color: 'white', marginBottom: '1rem', objectFit: 'cover', cursor: 'pointer', height: '30rem' }} className="bg-dark">
                            <Card.Img style={{ height: '20rem', width: 'auto', objectFit: 'cover' }} src={imageSource}/>
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
                    <Modal.Header onClick={showMessages} closeButton>
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
                    <Modal.Header onClick={showCommunities} closeButton>
                        <Modal.Title>Communities</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {userCommunities?.length > 0 ? Array.from(userCommunities)?.map(({ communityId, groupName, description, dateCreated, imageSource, mediaLink }) => (
                        <Card.Link key={communityId} style={{ textDecoration: 'none', color: 'black', margin: '1rem' }} href={`/community/${communityId}`}>
                            <Row>
                                <Col key='img' xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={imageSource} />
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