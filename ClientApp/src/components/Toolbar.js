import { Fragment } from 'react';
import { Col } from 'react-bootstrap';
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
                <Paperclip className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleNoteClick}>
                <FileCode className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleArtooClick}>
                <Robot className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleChatBotClick}>
                <ChatDots className='mx-2' action='true' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleSearchBarClick}>
                <JournalCode className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleEditorClick}>
                <Newspaper className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleTasksClick}>
                <Clipboard className='mx-2' action='true' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={handleReset}>
                <AspectRatio style={{ cursor: 'pointer' }} className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={showMessages}>
                <Messenger className='mx-2' color="black" size={40} />
            </Col>
            {/* If user is in communities, show this icon */}
            <Col style={{ cursor: 'pointer' }} onClick={showCommunities}>
                <Globe className='mx-2' color="black" size={40} />
            </Col>
            <Col style={{ cursor: 'pointer' }} onClick={toggleIsToolOpen}>
                <XSquare className='mx-2' color="black" size={40} />
            </Col>
        </Fragment>
    )
}

export default Toolbar;