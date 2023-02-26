import { Fragment } from 'react';
import { Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { XSquare, Robot, Globe, Paperclip, Clipboard, ChatDots, Messenger, FileCode, AspectRatio, Newspaper, JournalCode } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';

import { setIsToolOpen } from '../store/tool/tool.action';
import { selectIsToolOpen } from '../store/tool/tool.selector';

const Toolbar = () => {
    const dispatch = useDispatch();
    const isToolOpen = useSelector(selectIsToolOpen);

    const toggleIsToolOpen = () => dispatch(setIsToolOpen(!isToolOpen));

    // Function that creates a new panel
    const handlePanelClick = () => {
        console.log('handlePanelClick');

    }
    
    // Function that creates a new note
    const handleNoteClick = () => {
        console.log('handleNoteClick');
        
    }

    // Function that calls Artoo
    const handleArtooClick = () => {
        console.log('handleArtooClick');
        
    }

    // Function that calls Chatbot
    const handleChatBotClick = () => {
        console.log('handleChatBotClick');
        
    }

    // Function that calls search bar for art
    const handleSearchBarClick = () => {
        console.log('handleSearchBarClick');
        
    }

    // Function that calls search bar for poetry
    const handleEditorClick = () => {
        console.log('handleEditorlick');
        
    }

    // Function that shows tasks
    const handleTasksClick = () => {
        console.log('handleTasksClick');
        
    }

    // Function that resets panel
    const handleReset = () => {
        console.log('handleReset');

    }

    // Function that shows messages
    const showMessages = () => {
        console.log('showMessages');

    }

    // Function that shows communities
    const showCommunities = () => {
        console.log('showCommunities');

    }

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
            <Col style={{ cursor: 'pointer' }} onClick={handleChatBotClick}>
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
            <Col style={{ cursor: 'pointer' }} onClick={handleTasksClick}>
                <OverlayTrigger
                    key="overlaytrigger"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Playground
                        </Tooltip>
                    }
                >
                    <Clipboard className='mx-2' action='true' color="black" size={40} />
                </OverlayTrigger>
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleReset}>
            <OverlayTrigger
                    key="robot"
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-bottom">
                        Full Screen
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
            </Col>
        </Fragment>
    )
}

export default Toolbar;